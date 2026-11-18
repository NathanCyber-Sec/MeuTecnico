# 🛠️ Meu Técnico — site institucional

Site que desenvolvi para a **Meu Técnico Assistência**, a assistência técnica de consoles, notebooks e computadores de um amigo. **O site está em produção** e é usado pela loja para receber clientes.

🔗 **No ar:** [omeutecnico.com.br](https://omeutecnico.com.br/)

É uma página única, leve e responsiva, que apresenta os serviços e a loja e leva o cliente direto pro WhatsApp com a mensagem já preenchida.

## ✨ O que o site faz

- **Serviços:** manutenção de consoles, desbloqueio e manutenção de computadores e notebooks
- **Passo a passo de envio:** do pré-orçamento até a devolução do equipamento
- **Galeria da loja:** recepção, área de descanso e fachada
- **Horário de funcionamento**
- **Formulário → WhatsApp:** o cliente preenche nome e defeito, e o JavaScript monta a mensagem e abre o `wa.me` com o texto pronto, sem precisar de back-end
- **Menu mobile** e layout responsivo

## 🧰 Tecnologias

`HTML5` · `CSS3` · `JavaScript` (vanilla, sem framework e sem build)

## 📁 Estrutura

```
MeuTecnico/
├── index.html   # página única com todas as seções
├── styles.css   # layout, tema e responsividade
├── script.js    # menu mobile, ano no rodapé e formulário → WhatsApp
└── images/      # fotos da loja e logo
```

## ▶️ Rodando localmente

É só abrir o `index.html` no navegador. Se quiser servir:

```bash
python3 -m http.server 8000
```

## 📌 Próximos passos

- [ ] Link do Instagram da loja
- [ ] Otimizar imagens (logo em WebP)
- [ ] Seção de depoimentos com clientes reais
