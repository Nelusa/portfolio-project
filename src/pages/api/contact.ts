// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

type Data = {
  name: string;
};

interface ContactMessage {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !firstName ||
      firstName.trim() === "" ||
      !lastName ||
      lastName.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store it in a database
    const newMessage: ContactMessage = {
      email,
      firstName,
      lastName,
      message,
    };

    let client;
    //console.log(newMessage);
    try {
      client = await MongoClient.connect(
        "mongodb+srv://Nelusa:S0u6t03XXBrk3VNc@cluster0.lk0nr4k.mongodb.net/portfolio?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();

    try {
      const result = await db
        .collection("contact-messages")
        .insertOne(newMessage);
      // @ts-ignore
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully stored message!" });
  }
}

export default handler;
