# Conferir clima

Site que mostra a previsão do tempo. A intenção desse projeto era praticar minhas habilidades com consumo de api. A aplicação também conta com design responsivo.

*** ***O site está em manutenção então o link não está disponível no momento*** ***

## Tecnologias
- React
- Next
- Typescript
- Axios
- Sass

## Como rodar

Você precisara da rota da API da HGBrasil, usarei a seguinte no restante do exemplo e você também pode usar se quiser ```https://api.hgbrasil.com/weather?format=json-cors```, mas caso queira ultilizar mais funcionalidades da API será nescessário uma chave de acesso. Existe uma versão gratuita que você pode gerar no site deles. Visite a documentação para mais detalhes <a href="https://console.hgbrasil.com/documentation/weather" target="_blank" rel="noreferrer">Clicando aqui.</a>

É nescessário ter o git e o npm/yarn instalado na sua máquina.

- Clone o repositório
```bash
> git clone https://github.com/PeterBarboza/conferir-clima.git
```
- Acesse o diretório do projeto
```bash
> cd conferir-clima
```
- Instale as dependências
```bash
> npm install
#ou
> yarn add
```

- Agora crie um arquivo ```.env.local``` e o preencha da seguinte forma:
```
1 | NEXT_PUBLIC_API_URL:https://api.hgbrasil.com/weather?format=json-cors
```

Ou se preferir você pode alterar o valor da constante ```url``` na linha 23 de ```pages/index.tsx``` pela URL da API.
```
23 |   const url = process.env.NEXT_PUBLIC_API_URL as string
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

- Rode o projeto
```bash
> npm run dev
#ou 
> yarn dev
```
- Depois basta acessar localhost:3000 no seu navegador e pronto.
