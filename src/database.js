import cssLogo from "./assets/logos/css-logo.svg"
import gitLogo from "./assets/logos/git-logo.svg"
import htmlLogo from "./assets/logos/html-logo.svg"
import javaLogo from "./assets/logos/java-logo.svg"
import jsLogo from "./assets/logos/js-logo.svg"
import nodejsLogo from "./assets/logos/nodejs-logo.svg"
import reactLogo from "./assets/logos/react-logo.svg"
import sassLogo from "./assets/logos/sass-logo.svg"
import springbootLogo from "./assets/logos/springboot-logo.svg"
import tsLogo from "./assets/logos/ts-logo.svg"
import mysqlLogo from "./assets/logos/mysql-logo.svg"

import kenzieEmpresasThumb from "./assets/thumbs/kenzie-empresas-thumb.svg"
import kenzieEmpresasDesktop from "./assets/desktop/kenzie-empresas-desktop.png"
import kenzieEmpresasMobile from "./assets/mobile/kenzie-empresas-mobile.png"

import controlFinanceThumb from "./assets/thumbs/control-finance-thumb.svg"
import controlFinanceDesktop from "./assets/desktop/control-finance-desktop.png"
import controlFinanceMobile from "./assets/mobile/control-finance-mobile.png"

import petInfoThumb from "./assets/thumbs/pet-info-thumb.svg"
import petInfoDesktop from "./assets/desktop/pet-info-desktop.png"
import petInfoMobile from "./assets/mobile/pet-info-mobile.png"

import gitSearchThumb from "./assets/thumbs/git-search-thumb.svg"
import gitSearchDesktop from "./assets/desktop/git-search-desktop.png"
import gitSearchMobile from "./assets/mobile/git-search-mobile.png"

export const techList = [
    {
        name: "HTML",
        logo: htmlLogo
    },
    {
        name: "CSS",
        logo: cssLogo
    },
    {
        name: "JAVASCRIPT",
        logo: jsLogo
    },
    {
        name: "REACT",
        logo: reactLogo
    },
    {
        name: "NODEJS",
        logo: nodejsLogo
    },
    {
        name: "TYPESCRIPT",
        logo: tsLogo
    },
    {
        name: "SASS",
        logo: sassLogo
    },
    {
        name: "JAVA",
        logo: javaLogo
    },
    {
        name: "SPRING BOOT",
        logo: springbootLogo
    },
    {
        name: "GIT",
        logo: gitLogo
    },
    {
        name: "MYSQL",
        logo: mysqlLogo
    },
]

export const projects = [
    {
        id: crypto.randomUUID(),
        name: "Kenzie Empresas",
        thumb: kenzieEmpresasThumb,
        shortDescription: "Site para gerenciar funcionários e empresas",
        longDescription: "Este site tem como objetivo fazer a gestão de várias empresas e funcionários, com as empresas cadastradas, você pode se cadastrar como um usuário que está a procura de um emprego, ou um administrador que gerencia todo o site, no dashboard do administrador é possível gerenciar cada empresa, criar departamentos, gerenciar departamentos, contratar e demitir usuários, além de poder gerenciar todos os usuários cadastrados no site. Enquanto no dashboard do usuário, ele tem acesso a empresa em que foi contratado e o departamento em que está atuando.",
        desktopImage: kenzieEmpresasDesktop,
        mobileImage: kenzieEmpresasMobile,
    },
    {
        id: crypto.randomUUID(),
        name: "Control Finance",
        thumb: controlFinanceThumb,
        shortDescription: "Site para gestão financeira",
        longDescription: "Este é um aplicativo para controle de financas, nele é possível cadastrar e gerenciar cada entrada e saída de dinheiro. Com o Control Finance você nunca vai ficar sem saber para onde está indo o seu dinheiro, ou esquecer de deixar aquela reserva de emergência. É perfeito para calcular os gastos do mês, e quem sabe até programar aquela viagem tão desejada.",
        desktopImage: controlFinanceDesktop,
        mobileImage: controlFinanceMobile,
    },
    {
        id: crypto.randomUUID(),
        name: "Pet Info",
        thumb: petInfoThumb,
        shortDescription: "Uma rede social para amantes de pets",
        longDescription: "Pet info é uma rede social completa, focada em conectar pessoas que são amantes de pets para que possam trocar experiencias e momentos. Você pode fazer login ou se cadastrar se ainda não tiver uma conta. no feed é possível criar posts e ver e interagir com os posts de outros usuários. Após fazer uma postagem, também é possível editá-la ou excluí-la, sinta-se a vontade para explorar o nosso aplicativo.",
        desktopImage: petInfoDesktop,
        mobileImage: petInfoMobile,
    },
    {
        id: crypto.randomUUID(),
        name: "Git Search",
        thumb: gitSearchThumb,
        shortDescription: "Um aplicativo de perquisa dos usuários do github",
        longDescription: "Neste aplicativo, é possível pesquisar por qualquer usuário existente no github. Se o aplicativo encontrar o usuário, ele o redireciona para um página com as informações do usuário (nome, perfil e projetos). Caso não encontre, ele o redireciona para uma página de erro. Sinta-se a vontade para pesquisar o quanto quiser.",
        desktopImage: gitSearchDesktop,
        mobileImage: gitSearchMobile,
    },
]