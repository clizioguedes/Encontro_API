import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController {
  async create(request: Request, response: Response) {
    const { name, phone } = request.body;

    const userRepository = getRepository(User);

    const userAlreadyExists = await userRepository.findOne({
      phone,
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        error:
          "Esse whatsapp já foi cadastrado, iremos entrar em contato em breve",
      });
    }

    const user = userRepository.create({
      name,
      phone,
    });

    await userRepository.save(user);
    response.send();
  }
}

export { UserController };
