import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async index(request: Request, response: Response) {
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

    const { id } = request.params;

    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    return response.json(user);
  }

  async create(request: Request, response: Response) {
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

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
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

    const userRepository = getCustomRepository(UserRepository);

    const all = await userRepository.find();

    return response.json(all);
  }

  async updateContacted(request: Request, response: Response) {
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

    const { id } = request.params;

    const { contacted } = request.body;

    const userRepository = getCustomRepository(UserRepository);

    const isUpdated = await userRepository.update(id, {
      contacted,
      updated_at: new Date(),
    });

    if (isUpdated) {
      const userUpdated = await userRepository.findOne(id);
      return response.status(201).json(userUpdated);
    }
    return response.status(404).json({
      message: "User não encontrado",
    });
  }
}

export { UserController };
