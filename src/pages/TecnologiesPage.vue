<template>
    <container-box>
        <h2>Principais tecnologias que conheço/utilizo:</h2>
    </container-box>
    <container-box class="mt-15" v-for="tec in tecnologies" :key="tec.name">
        <div class="display-flex-start">
            <img class="logo" :src="tec.imgSrc" alt="logo">
            <div class="description">
                <h3>{{ tec.name }}</h3>
                <p><span v-html="tec.description"></span></p>
            </div>
        </div>
    </container-box>
</template>

<script>
export default {
    data() {
        return {
            tecnologies: [
                {
                    name: '.NET',
                    description: `.NET é uma plataforma de desenvolvimento de software, de código aberto, mantida pela Microsoft. Ao contrário de frameworks, que geralmente se concentram em um tipo específico de aplicação (como a web), o .NET é um ecossistema completo.
                    Ele inclui ferramentas, bibliotecas e linguagens de programação, com destaque para o C#, para criar diversos tipos de aplicações: web, desktop, mobile, jogos, microsserviços e muito mais.
                    Sua grande vantagem é ser multiplataforma, permitindo que o mesmo código funcione em Windows, macOS e Linux, garantindo desempenho e segurança.`,
                    imgSrc: require('../assets/dotnet_logo.png')
                },
                {
                    name: 'C# (C Sharp)',
                    description: `C# é uma linguagem de programação orientada a objetos, criada e mantida pela Microsoft. Ela foi desenvolvida para ser usada principalmente com a plataforma .NET e se destaca por sua simplicidade, segurança e versatilidade. Graças a essas características, o C# se tornou muito popular para a criação de diversos tipos de aplicações. É a linguagem principal da Unity, uma das maiores engines de jogos do mundo, e também é amplamente utilizada em aplicações web com frameworks como o ASP.NET Core, em aplicações desktop para Windows e em serviços de nuvem como o Microsoft Azure. Em resumo, o C# é uma linguagem moderna e poderosa, perfeita para construir uma ampla variedade de aplicações de alta performance.`,
                    imgSrc: require('../assets/csharp_logo.png')
                },
                {
                    name: 'Entity Framework Core',
                    description: `Entity Framework Core, ou EF Core, é um framework de Mapeamento Objeto-Relacional (ORM) para .NET. Ele funciona como uma ponte entre a sua aplicação e o banco de dados.
                    A principal função do EF Core é permitir que você interaja com o banco de dados usando objetos C# do seu código, em vez de escrever consultas SQL manualmente. Por exemplo, você pode criar uma classe Produto e o EF Core se encarregará de gerar as tabelas e colunas correspondentes no banco de dados. Isso agiliza o desenvolvimento e reduz a chance de erros.
                    Ele suporta vários bancos de dados, como SQL Server, PostgreSQL, MySQL e SQLite, e se integra perfeitamente com o .NET, tornando a manipulação de dados mais intuitiva e orientada a objetos.`,
                    imgSrc: require('../assets/ef_logo.png')
                },
                {
                    name: 'Angular',
                    description: `Angular é um framework de desenvolvimento web para criar aplicações dinâmicas e de página única, as SPAs. Ele é mantido pelo Google e usa TypeScript, uma versão do JavaScript com recursos adicionais.
                    Seus principais diferenciais são a estrutura modular, o uso de componentes reutilizáveis e a facilidade de criar interfaces de usuário complexas de forma organizada.`,
                    imgSrc: require('../assets/angular_logo.jpeg')
                },
                {
                    name: 'Vue',
                    description: `Vue.js é um framework JavaScript progressivo e de código aberto para a criação de interfaces de usuário e aplicações de página única (SPAs).
                    Ele é conhecido por ser simples, leve e flexível. Você pode usá-lo para criar desde pequenas partes de um site até aplicações complexas. O Vue se diferencia pela sua curva de aprendizado mais suave e pela facilidade de integração em projetos existentes.`,
                    imgSrc: require('../assets/vue_logo.png')
                },
                {
                    name: 'Node JS',
                    description: `Node.js é um ambiente de execução (ou "runtime") que permite que o JavaScript, que originalmente só rodava no navegador, seja executado fora dele, ou seja, no lado do servidor.
                    Ele usa o motor V8 do Google Chrome, tornando-o extremamente rápido e eficiente. Graças à sua arquitetura não-bloqueante, o Node.js é ideal para construir aplicações web em tempo real, APIs e microsserviços que precisam lidar com muitas conexões simultâneas de forma leve e performática.`,
                    imgSrc: require('../assets/nodejs_logo.jpg')
                },
                {
                    name: 'Java Script',
                    description: `JavaScript é uma linguagem de programação usada principalmente para tornar as páginas da web interativas.<br/> Ela roda no navegador do usuário, permitindo coisas como animações, validações de formulário e atualizações de conteúdo sem recarregar a página.`,
                    imgSrc: require('../assets/javascript_logo.png')
                },
                {
                    name: 'Type Script',
                    description: `TypeScript é um "superconjunto" do JavaScript. Isso significa que ele adiciona funcionalidades ao JavaScript, como a tipagem estática. Com o TypeScript, você pode definir o tipo de uma variável (como número, texto ou objeto), o que ajuda a encontrar erros antes de executar o código, tornando-o mais robusto e fácil de manter, especialmente em projetos grandes. No final, o código TypeScript é compilado e transformado em JavaScript puro para ser executado.`,
                    imgSrc: require('../assets/typescript_logo.png')
                },
                {
                    name: 'JQuery',
                    description: `jQuery é uma biblioteca de JavaScript projetada para simplificar a manipulação de elementos HTML, tratamento de eventos, criação de animações e interações com a API. Lançada em 2006, ela se popularizou por resolver problemas de compatibilidade entre navegadores, que eram comuns na época.
                    A principal filosofia do jQuery é "escrever menos, fazer mais". Ele permite que tarefas complexas, como selecionar elementos da página ou adicionar efeitos visuais, sejam feitas com poucas linhas de código. Embora não seja tão essencial hoje em dia, graças às melhorias no JavaScript, o jQuery ainda é amplamente utilizado em projetos mais antigos e em muitos sites da web.`,
                    imgSrc: require('../assets/jquery_logo.png')
                },
                {
                    name: 'SQL Server',
                    description: `SQL Server é um sistema gerenciador de banco de dados relacional (SGBD) desenvolvido pela Microsoft. Ele usa a linguagem SQL para armazenar, gerenciar e consultar dados de forma segura e eficiente.
                    Sua principal finalidade é servir como a "espinha dorsal" de aplicações que precisam lidar com grandes volumes de dados. Por ser um produto da Microsoft, 
                    ele tem uma integração nativa com o ecossistema .NET, mas pode ser usado com qualquer outra plataforma. É conhecido por seus recursos avançados de segurança, alta performance e ferramentas de administração como o SQL Server Management Studio (SSMS), que facilitam a vida de desenvolvedores e administradores de banco de dados.`,
                    imgSrc: require('../assets/sql_server_logo.png')
                },
            ]
        }
    }
}
</script>