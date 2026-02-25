# Identificador de Acidentes Musicais

Aplicação web simples para identificar os acidentes musicais (sustenidos `#` e bemóis `b`) de uma tonalidade maior.

## Visão geral

O projeto exibe botões com tonalidades. Ao clicar em um tom, a interface mostra:

- Nome da tonalidade selecionada
- Tipo de acidente (`#` ou `b`)
- Quantidade de acidentes
- Lista dos acidentes em ordem

## Funcionalidades

- Interface visual em HTML/CSS com layout mobile-first (ajustada para iPhone)
- Seleção de tonalidades por botões
- Botão para embaralhar a ordem das tonalidades exibidas
- Cálculo de acidentes com base em listas pré-definidas no JavaScript
- Exibição dinâmica do resultado sem recarregar a página

## Estrutura do projeto

- `index.html`: página principal com HTML da aplicação
- `app.js`: regras de tonalidades + comportamento da interface (renderização, clique e embaralhamento)
- `styles.css`: estilos da interface
- `acidentes.txt`: anotações com a ordem dos acidentes

## Como executar

Como é um projeto estático, não precisa instalar dependências.

1. Execute o servidor local:

```bash
npm run serve
```

2. No navegador do computador, acesse:

`http://localhost:8080/`

3. No iPhone (mesma rede Wi-Fi), acesse:

`http://SEU_IP_LOCAL:8080/`

Opcionalmente, você pode usar um servidor local simples:

```bash
python3 -m http.server 8080 --bind 0.0.0.0 --directory .
```

Depois, acesse `http://localhost:8080/`.

## Testes

Os testes validam:

- tonalidade natural (`C`)
- acidentes de sustenidos
- acidentes de bemóis
- lista de tonalidades disponíveis
- tratamento de tonalidade inválida

Para executar:

```bash
npm test
```

## Exemplo de uso

- Selecionando `C`: retorna que não possui acidentes.
- Selecionando um tom com sustenidos: mostra os acidentes com `#`.
- Selecionando um tom com bemóis: mostra os acidentes com `b`.
- Clicando em `Embaralhar tonalidades`: reorganiza a ordem dos botões de tom.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Melhorias sugeridas

- Separar CSS e JavaScript em arquivos próprios
- Incluir suporte a tonalidades menores
- Melhorar acessibilidade (teclado, contraste e ARIA)

## Licença

MIT
