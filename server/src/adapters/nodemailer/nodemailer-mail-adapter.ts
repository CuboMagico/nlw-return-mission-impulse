import nodemailer from "nodemailer"

import { MailAdapter, SendMailData } from "../mail-adapter";



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "",
        pass: ""
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