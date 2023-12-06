import refatorando from "../assets/thumbs/refatorando-thumb.jpg"
import requisicoes1 from "../assets/thumbs/requisicoes1-thumb.webp"
import resolvendo1 from "../assets/thumbs/resolvendo1-thumb.webp"
import resolvendo2 from "../assets/thumbs/resolvendo2-thumb.webp"
import introducaoAxios from "../assets/thumbs/introducao-axios-thumb.webp"
import programandoc from "../assets/thumbs/programandoc-thumb.jpg"

export const videoList = [
    {
        id: crypto.randomUUID(),
        thumb: resolvendo1,
        title: "Resolvendo Desafios De Programação #1 | Conjectura de Collatz",
        description: "Neste vídeo estou usando o codewars para resolver problemas de programação, dessa vez estou resolvendo um desafio baseado na conjectura de collatz usando algoritmos.",
        link: "https://youtu.be/oSh_96E837A"
    },
    {
        id: crypto.randomUUID(),
        thumb: programandoc,
        title: "Primeira Vez Programando Em C!!",
        description: "Este é um video onde estou resolvendo um desafio de estrutura de dados usando a linguagem C, a linguagem C é ideal para controlar criação e alocação de elementos na memória.",
        link: "https://youtu.be/iwxQPEXdDFU"
    },
    {
        id: crypto.randomUUID(),
        thumb: introducaoAxios,
        title: "Introdução ao axios no React",
        description: "Este vídeo é um tutorial introdutório de como fazer requisições HTTP no react usando uma biblioteca muito poderosa chamada axios, .",
        link: "https://youtu.be/iQ9RtTA6zJ4"
    },
    {
        id: crypto.randomUUID(),
        thumb: resolvendo2,
        title: "Resolvendo Desafios De Programação #2 Fibonnaci (hardcore version)",
        description: "Aqui, estou novamente usando o codewars para resolver mais um desafio de algoritmo, dessa vez uma versão mais difícil da famosa sequencia do fibonnaci.",
        link: "https://youtu.be/N1y5jgMYlEw"
    },
    {
        id: crypto.randomUUID(),
        thumb: requisicoes1,
        title: "Requisições HTTP com axios (CRUD) #1 Leitura",
        description: "Este video é o primeiro de uma sequencia onde ensino fazer um CRUD completo no react usando a biblioteca axios, é uma sequencia do video introdutório sobre o axios.",
        link: "https://youtu.be/1tPVrV_hS2I"
    },
    {
        id: crypto.randomUUID(),
        thumb: refatorando,
        description: "Este vídeo é uma refatoração de um CRUD que usa estados para lidar com dados do backend por um CRUD usando uma biblioteca chamada react-query.",
        link: "https://youtu.be/qyhojSu2iVo"
    },
]