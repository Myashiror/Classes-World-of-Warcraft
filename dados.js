let dados = [
        {
            titulo: "Monge",
            descrição: "O Monge em World of Warcraft é uma classe versátil inspirada nas artes marciais asiáticas. Ele pode ser um tanque (Mestre Cervejeiro), curador (Tecelão da Névoa) ou DPS corpo a corpo (Andarilho do Vento), usando Chi e Energia para suas habilidades.",
            link: "https://www.wowhead.com/pt/guide/classes/monk/windwalker/overview-pve-dps",
            tags:["monk", "versátil", "artes marciais", "tanque", "heal", "curador", "tank", "DPS", "heal", "corpo a corpo", "chi", "curador", "healer", "energia"]
        },
        {
            titulo: "Caçador",
            descrição: "O Caçador em World of Warcraft é um mestre em combate à distância, utilizando arcos, bestas e armas de fogo. Ele pode escolher entre diversas especializações, como Marca de Caça, Sobrevivência e Bestas, cada uma com seu estilo de jogo único.",
            link: "https://www.wowhead.com/pt/guide/classes/hunter/marksmanship/overview-pve-dps",
            tags:["Hunter", "distância", "dps", "arco", "besta", "armas de fogo", "marca de caça", "sobrevivência", "bestas"]
        },
        {
            titulo: "Paladino",
            descrição: "O Paladino em World of Warcraft é um guerreiro sagrado que combina força física e poder divino. Ele pode ser um tanque (Protetor), curador (Sagrado) ou DPS (Retribuição), usando a Luz para curar aliados e ferir inimigos.",
            link: "https://www.wowhead.com/pt/guide/classes/paladin/retribution/overview-pve-dps",
            tags:["sagrado", "luz", "dps", "justiça", "curador", "healer", "cruzado", "aura", "proteção", "heal", "retalho"]
        },
        {
            titulo: "Mago",
            descrição: "O Mago em World of Warcraft é um mestre da magia arcana, capaz de lançar poderosos feitiços e controlar os elementos. Ele pode especializar-se em fogo, gelo ou arcane, cada um com suas próprias habilidades únicas.",
            link: "https://www.wowhead.com/pt/guide/classes/mage/fire/overview-pve-dps",
            tags:["Mage", "arcano", "dps", "fogo", "gelo", "feitiço", "conjuração", "elemental"]
        },
        {
            titulo: "Sacerdote",
            descrição: "Sacerdotes são frequentemente considerados como uma das classes padrões de cura em World of Warcraft, já que eles possuem duas árvores de talentos que podem ser usadas para curar efetivamente. Porém, são formidáveis em dar dano com habilidades específicas à um nicho.",
            link: "https://www.wowhead.com/pt/class=5/sacerdote",
            tags:["Priest", "cura", "sombra", "dps", "curador", "healer", "dispelação", "ressurreição", "heal", "sagrado",]
        },
        {
            titulo: "Ladino",
            descrição: "Ladinos são uma classe corpo-a-corpo que veste couro capazes de dar grandes quantidades de dano aos seus inimigos com ataques rápidos. São mestres da furtividade e assassinato, passando despercebido por seus inimigos e atingindo-os pelas sombras, posteriormente escapando de combate em um piscar de olhos.",
            link: "https://www.wowhead.com/pt/class=4/ladino",
            tags:["Rogue", "stealth", "dps", "energia", "combate corpo a corpo", "combate", "rog",]
        },
        {
            titulo: "Bruxo",
            descrição: "Bruxos são mestres das artes demoníacas. Vestidos em tecidos com um design demoníaco, eles se sobressaem na utilização de maldições, disparo de rajadas de fogo ou sombrias e invocação de demônios para ajudá-los em combate. Bruxos, ao passo que são excelentes conjuradores de magia, também se sobressaem em dar suporte a membros de raide com bônus e utilidades peculiares.",
            link: "https://www.wowhead.com/pt/class=9/bruxo",
            tags:["Lock", "demônio", "invocação", "dps", "maldição", "feitiço", "corrupção", "sombras",]
        },
        {
            titulo: "Guerreiro",
            descrição: "Guerreiros são uma classe muito poderosa, com uma considerável habilidade de ser tanque ou causar dano corpo-a-corpo. A árvore de talentos Proteção contém muitos talentos para aprimorar sua sobrevivência e gerar threat contra monstros. Guerreiros de Proteção são um dos principais e clássicos tanques do jogo.",
            link: "https://www.wowhead.com/pt/class=1/guerreiro",
            tags:["War", "arms", "armadura", "dps", "fury", "tanque", "DPS", "corpo a corpo",]
        },
        {
            titulo: "Cavaleiro da Morte",
            descrição: "Introduzido na expansão Wrath of the Lich King, Cavaleiro da Morte é a primeira classe heroica de World of Warcraft. Cavaleiros da Morte começam no nível 55 em uma zona especial de instância inalcançável por qualquer outra classe, com build especificas em 2 delas sendo DPS Corpo a corpo e TANK.",
            link: "https://www.wowhead.com/pt/class=6/cavaleiro-da-morte",
            tags:["DK", "morte", "runas", "dps", "pragas", "sangue", "Death Knight", "tanque", "DPS",]
        },
        {
            titulo: "Caçador de Demônios",
            descrição: "Os Caçadores de Demônios, discípulos de Illidan Stormrage, defendem um legado sombrio, que assusta tanto seus aliados quanto seus inimigos. Os Illidari adotam magias vis e caóticas energias que há muito ameaçam o mundo de Azeroth acreditando que são necessárias para desafiar a Legião Ardente. Utilizando os poderes dos demônios que mataram, eles desenvolvem características demoníacas que incitam repulsa e pavor em seus companheiros elfos.",
            link: "https://www.wowhead.com/pt/class=12/caçador-de-demônios",
            tags:["Dh", "demônio", "caos", "dps", "energia vil", "metamorfose", "corpo a corpo", "mobilidade",]
        },
        {
            titulo: "Xamã",
            descrição: "Xamãs são mestres das magias naturais e elementais com totens, sua marca registrada, que fornecem bônus ao grupo. Um xamã pode invocar um totem de cada elemento - terra, fogo, ar e água - que aparecem aos pés do xamã e fornecem um bônus para qualquer um que esteja perto em seu grupo ou raide. Alguns totens de xamã, especialmente os de fogo, também causam dano ao oponente. O truque para jogar qualquer tipo de xamã é saber quais totens a conjurar sob certas circunstâncias para maximizar o dano e a sobrevivência do grupo.",
            link: "https://www.wowhead.com/pt/class=7/xamã",
            tags:["Shamy", "elemental", "totem", "espírito", "natureza", "cura", "curador", "healer", "heal", "DPS",]
        },
        {
            titulo: "Druida",
            descrição: "Druida é a classe “faz tudo” do World of Warcraft -- são capazes de cumprir uma variedade de papeis e por isso tem um dos mais variados estilos de jogo. Um druida pode curar, bater corpo a corpo, bater à distância ou segurar inimigos, utilizando uma variedade de formas de metamorfose. A medida que o druida aumenta seu nível, o jogador é capaz de aprender novas e mais poderosas formas as quais ele/ela pode conjurar para se transformar em diferentes criaturas para cumprir seus papeis.",
            link: "https://www.wowhead.com/pt/class=11/druida",
            tags:["Druid", "natureza", "transformação", "cura", "tanque", "DPS", "equilíbrio", "stealth", "heal", "curador", "healer", "Feral",]
        },
        {
            titulo: "Conjurante",
            descrição: "O Evoker é uma nova classe que chega em Dragonflight, a nona expansão de World of Warcraft. Criados por Neltharion e adormecidos há milênios nas Ilhas dos Dragões, esses conjuradores dracônicos que usam Malha, conhecidos como Dracthyr, usam sua fisiologia de dragão e o poder combinado das cinco Revoadas Dragônicas para desencadear ataques devastadores à distância ou curar feridas de seus aliados.",
            link: "https://www.wowhead.com/pt/class=13/conjurante",
            tags:["Evoker", "curador", "healer", "dragão", "magia", "malha", "cura", "DPS", "heal", "convoker", "conjurante", "elemental",]
        }
];


