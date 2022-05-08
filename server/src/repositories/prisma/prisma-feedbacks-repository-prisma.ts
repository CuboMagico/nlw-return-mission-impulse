import { prisma } from "../../prisma";
import { feedbackCreateData, FeedbackRepository } from "../feedbacks-repositoty";

export class PrismaFeedbackRepository implements FeedbackRepository {
    async create ({ type, comment, screenshot }: feedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}