import express from "express"
import nodemailer from "nodemailer"

import { prisma } from "./prisma"

import { NodemailerAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository-prisma";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";



export const routes = express.Router()





routes.post("/feedbacks", async (req, res) => {

    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailAdapter = new NodemailerAdapter
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailAdapter
    )


    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})