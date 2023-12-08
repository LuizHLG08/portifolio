import kenzieEmpresasThumb from "../assets/thumbs/kenzie-empresas-thumb.svg"
import kenzieEmpresasDesktop from "../assets/desktop/kenzie-empresas-desktop.png"
import kenzieEmpresasMobile from "../assets/mobile/kenzie-empresas-mobile.png"

import controlFinanceThumb from "../assets/thumbs/control-finance-thumb.svg"
import controlFinanceDesktop from "../assets/desktop/control-finance-desktop.png"
import controlFinanceMobile from "../assets/mobile/control-finance-mobile.png"

import petInfoThumb from "../assets/thumbs/pet-info-thumb.svg"
import petInfoDesktop from "../assets/desktop/pet-info-desktop.png"
import petInfoMobile from "../assets/mobile/pet-info-mobile.png"

import gitSearchThumb from "../assets/thumbs/git-search-thumb.svg"
import gitSearchDesktop from "../assets/desktop/git-search-desktop.png"
import gitSearchMobile from "../assets/mobile/git-search-mobile.png"

import openMusicThumb from "../assets/thumbs/open-music-thumb.svg"
import openMusicDesktop from "../assets/desktop/open-music-desktop.png"
import openMusicMobile from "../assets/mobile/open-music-mobile.png"

import techPostersThumb from "../assets/thumbs/tech-posters-thumb.svg"
import techPostersDesktop from "../assets/desktop/tech-posters-desktop.png"
import techPostersMobile from "../assets/mobile/tech-posters-mobile.png"

import catalogoGeekThumb from "../assets/thumbs/catalogo-geek-thumb.svg"
import catalogoGeekDesktop from "../assets/desktop/catalogo-geek-desktop.png"
import catalogoGeekMobile from "../assets/mobile/catalogo-geek-mobile.png"

import nuKenzieThumb from "../assets/thumbs/nu-kenzie-thumb.svg"
import nuKenzieDesktop from "../assets/desktop/nu-kenzie-desktop.png"
import nuKenzieMobile from "../assets/mobile/nu-kenzie-mobile.png"

import hamburgueriaThumb from "../assets/thumbs/hamburgueria-thumb.svg"
import hamburgueriaDesktop from "../assets/desktop/hamburgueria-desktop.png"
import hamburgueriaMobile from "../assets/mobile/hamburgueria-mobile.png"

import kenzieHubThumb from "../assets/thumbs/kenzie-hub-thumb.svg"
import kenzieHubDesktop from "../assets/desktop/kenzie-hub-desktop.png"
import kenzieHubMobile from "../assets/mobile/kenzie-hub-mobile.png"


export const projects = [
    {
        id: crypto.randomUUID(),
        name: "Git Search",
        thumb: gitSearchThumb,
        shortDescription: "Um aplicativo de perquisa dos usuários do github",
        longDescription: "Neste aplicativo, é possível pesquisar por qualquer usuário existente no github. Se o aplicativo encontrar o usuário, ele o redireciona para um página com as informações do usuário (nome, perfil e projetos). Caso não encontre, ele o redireciona para uma página de erro. Sinta-se a vontade para pesquisar o quanto quiser.",
        desktopImage: gitSearchDesktop,
        mobileImage: gitSearchMobile,
        colorTheme: "#C2255C"
    },
    {
        id: crypto.randomUUID(),
        name: "Control Finance",
        thumb: controlFinanceThumb,
        shortDescription: "Site para gestão financeira",
        longDescription: "Este é um aplicativo para controle de financas, nele é possível cadastrar e gerenciar cada entrada e saída de dinheiro. Com o Control Finance você nunca vai ficar sem saber para onde está indo o seu dinheiro, ou esquecer de deixar aquela reserva de emergência. É perfeito para calcular os gastos do mês, e quem sabe até programar aquela viagem tão desejada.",
        desktopImage: controlFinanceDesktop,
        mobileImage: controlFinanceMobile,
        colorTheme: "#6841DA"
    },
    {
        id: crypto.randomUUID(),
        name: "Pet Info",
        thumb: petInfoThumb,
        shortDescription: "Uma rede social para amantes de pets",
        longDescription: "Pet info é uma rede social completa, focada em conectar pessoas que são amantes de pets para que possam trocar experiencias e momentos. Você pode fazer login ou se cadastrar se ainda não tiver uma conta. no feed é possível criar posts e ver e interagir com os posts de outros usuários. Após fazer uma postagem, também é possível editá-la ou excluí-la, sinta-se a vontade para explorar o nosso aplicativo.",
        desktopImage: petInfoDesktop,
        mobileImage: petInfoMobile,
        colorTheme: "#364FC6"
    },
    {
        id: crypto.randomUUID(),
        name: "Open Music",
        thumb: openMusicThumb,
        shortDescription: "Um site de venda de discos",
        longDescription: "Neste site é possível anunciar e comprar discos, você tem filtros de pesquisa onde pode separar os discos por gênero ou por preço. O site também vem emplementado com dark-mode para melhorar a acessibilidade e garantir uma melhor experiência de usuário",
        desktopImage: openMusicDesktop,
        mobileImage: openMusicMobile,
        colorTheme: "#D3693F"
    },
    {
        id: crypto.randomUUID(),
        name: "Tech Posters",
        thumb: techPostersThumb,
        shortDescription: "Uma rede social para amantes da tecnologia",
        longDescription: "Esta rede social foi criada no intuito de conectar os amantes de tecnologia, nela é possível postar e interagir com as postagens de outras pessoas. no seu feed é possível ver todos os posts dos usuários, a area de criação de post e a area de sugestões para você seguir, onde aparecem outros usuários que tenham as mesmas preferências que você.",
        desktopImage: techPostersDesktop,
        mobileImage: techPostersMobile,
        colorTheme: "#282828"
    },
    {
        id: crypto.randomUUID(),
        name: "Geek Word",
        thumb: catalogoGeekThumb,
        shortDescription: "Uma loja para venda de artigos geek",
        longDescription: "Esta é uma loja focada na compra e venda de produtos do mundo geek, na primeira aba é possivel encontrar quadros, e na segunda aba ficam as action fígures. Perfeito para decorar o seu quarto com seus personagens favoritos.",
        desktopImage: catalogoGeekDesktop,
        mobileImage: catalogoGeekMobile,
        colorTheme: "#0A99FF"
    },
    {
        id: crypto.randomUUID(),
        name: "Hamburgueria",
        thumb: hamburgueriaThumb,
        shortDescription: "A hamburgueria com os melhores preços da região",
        longDescription: "Este site é uma hamburgueria completa, uma vez logado, é possível escolher o seu lanche e adicioná-lo ao carrinho, seu lanche ficará salvo no carrinho até que resolva comprá-lo ou se mudar de ideia, pode removê-lo.",
        desktopImage: hamburgueriaDesktop,
        mobileImage: hamburgueriaMobile,
        colorTheme: "#27AE60"
    },
    {
        id: crypto.randomUUID(),
        name: "Nu Kenzie",
        thumb: nuKenzieThumb,
        shortDescription: "Um banco para administração de finanças",
        longDescription: "Este é site que tem como objetivo controlar suas finanças, uma vez feito o login, é possível registrar todas as entradas e saídas e tudo ficara salvo nos seus registros.",
        desktopImage: nuKenzieDesktop,
        mobileImage: nuKenzieMobile,
        colorTheme: "#FD377E"
    },
    {
        id: crypto.randomUUID(),
        name: "Kenzie Empresas",
        thumb: kenzieEmpresasThumb,
        shortDescription: "Site para gerenciar funcionários e empresas",
        longDescription: "Este site tem como objetivo fazer a gestão de várias empresas e funcionários, com as empresas cadastradas, você pode se cadastrar como um usuário que está a procura de um emprego, ou um administrador que gerencia todo o site, no dashboard do administrador é possível gerenciar cada empresa, criar departamentos, gerenciar departamentos, contratar e demitir usuários, além de poder gerenciar todos os usuários cadastrados no site. Enquanto no dashboard do usuário, ele tem acesso a empresa em que foi contratado e o departamento em que está atuando.",
        desktopImage: kenzieEmpresasDesktop,
        mobileImage: kenzieEmpresasMobile,
        colorTheme: "#0026FF"
    },
    {
        id: crypto.randomUUID(),
        name: "Kenzie Hub",
        thumb: kenzieHubThumb,
        shortDescription: "Site para vercionamento de código",
        longDescription: "Neste site é possível se cadastrar ou fazer login, uma vez dentro do site é possível configurar o seu perfil, adicionar e remover tecnologias e qual é o seu nível na mesma. Também é possível adicionar e remover projetos, tudo ficará salvo na sua conta.",
        desktopImage: kenzieHubDesktop,
        mobileImage: kenzieHubMobile,
        colorTheme: "#121214"
    },
]