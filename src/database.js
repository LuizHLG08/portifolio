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

import kenzieEmpresasThumb from "./assets/thumbs/kenzie-empresas-thumb.jpg"
import kenzieEmpresasDesktop from "./assets/desktop/kenzie-empresas-desktop.png"
import kenzieEmpresasMobile from "./assets/mobile/kenzie-empresas-mobile.png"


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
        longDescription: "Este site tem como objetivo simular a gestão de várias empresas e funcionários, com as empresas cadastradas, você pode se cadastrar como um usuário que está a procura de um emprego, ou um administrador que gerencia todo o site, no dashboard do administrador é possível gerenciar cada empresa, criar departamentos, gerenciar departamentos, contratar e demitir usuários, além de poder gerenciar todos os usuários cadastrados no site. Enquanto no dashboard do usuário, ele tem acesso a empresa em que foi contratado e o departamento em que está atuando.",
        desktopImage: kenzieEmpresasDesktop,
        mobileImage: kenzieEmpresasMobile,
    },
]