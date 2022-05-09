import { MailAdapter } from "../adapters/mail-adapter"
import { FeedbackRepository } from "../repositories/feedbacks-repositoty"


export interface SubmitFeedbackUseCaseRequest {
    type: string
    comment: string
    screenshot?: string
}


export class SubmitFeedbackUseCase {
    
    constructor (
        private feedbackRepository : FeedbackRepository,
        private mailAdapter : MailAdapter
    ) {}


    async execute (request : SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request


        if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
            throw new Error("Invalid screenshot format")
        }

        if (!type) {
            throw new Error("Type is required")
        }

        if (!comment) {
            throw new Error("Comment is required")
        }


        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })


        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div>`,
                    `<p>Feedback do tipo ${type}:</p>`,
                    `<p>${comment}</p>`,
                    `<img style="height:400px;" src="${screenshot}">`,
                `</div>`
            ].join("\n")
        })
    }
}