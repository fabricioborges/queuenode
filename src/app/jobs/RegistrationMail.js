import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
    },
    async handle({ data }) {
        const {user} = data;

        await Mail.sendMail({
            from: 'Queue Teste <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuários',
            html: `Olá, ${user.name}, bem-vindo ao sistemas de filas : D`
        });
    }
}