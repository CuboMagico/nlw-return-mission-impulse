import nodemailer from "nodemailer"

import { MailAdapter, SendMailData } from "../mail-adapter";



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0f177bc6a33c60",
        pass: "5f7b2d22cbbae5"
    }
});


export class NodemailerAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Maciel & Equipe feedget <oi@feedget.com>",
            to: "Maciel Suassuna <macielsuassuna14@gmail.com>",
            subject,
            html: body
        })
    }
}