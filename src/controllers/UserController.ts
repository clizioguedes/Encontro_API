import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, phone } = request.body;

    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({
      phone,
    });

    const messageUserAlreadyExists = "Esse whatsapp já foi cadastrado";

    if (userAlreadyExists) {
      return response.status(400).json({
        error: messageUserAlreadyExists,
      });
    }

    const user = userRepository.create({
      name,
      phone,
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }

  async show(request: Request, response: Response) {
    const userRepository = getCustomRepository(UserRepository);

    const all = await userRepository.find();

    console.log(all);
    return response.json(all);
  }
}

export { UserController };
