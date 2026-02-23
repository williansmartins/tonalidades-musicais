# Identificador de Acidentes Musicais

Aplicação web simples para identificar os acidentes musicais (sustenidos `#` e bemóis `b`) de uma tonalidade maior.

## Visão geral

O projeto exibe botões com tonalidades. Ao clicar em um tom, a interface mostra:

- Nome da tonalidade selecionada
- Tipo de acidente (`#` ou `b`)
- Quantidade de acidentes
- Lista dos acidentes em ordem

## Funcionalidades

- Interface visual em HTML/CSS com layout centralizado
- Seleção de tonalidades por botões
- Cálculo de acidentes com base em listas pré-definidas no JavaScript
- Exibição dinâmica do resultado sem recarregar a página

## Estrutura do projeto

- `tonalidades.html`: página principal com HTML, CSS e JavaScript da aplicação
- `acidentes.txt`: anotações com a ordem dos acidentes

## Como executar

Como é um projeto estático, não precisa instalar dependências.

1. Abra o arquivo `tonalidades.html` no navegador.
2. Clique em uma tonalidade para visualizar os acidentes.

Opcionalmente, você pode usar um servidor local simples:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000/tonalidades.html`.

## Exemplo de uso

- Selecionando `C`: retorna que não possui acidentes.
- Selecionando um tom com sustenidos: mostra os acidentes com `#`.
- Selecionando um tom com bemóis: mostra os acidentes com `b`.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Melhorias sugeridas

- Separar CSS e JavaScript em arquivos próprios
- Adicionar testes para validação das tonalidades
- Incluir suporte a tonalidades menores
- Melhorar acessibilidade (teclado, contraste e ARIA)

## Licença

MIT
