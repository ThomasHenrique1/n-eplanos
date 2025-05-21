# 🩺 N&H Associados – Plataforma de Leads para Planos de Saúde

Sistema completo para captação, gestão e distribuição de leads voltado à venda e consultoria de planos de saúde. Desenvolvido com foco em agilidade no atendimento, facilidade de uso para corretores e uma experiência simples para o cliente final.

# 📌 Objetivo
O objetivo deste sistema é facilitar a geração de leads e sua distribuição inteligente entre corretores parceiros, garantindo agilidade e melhor organização no atendimento ao cliente.

# 🧠 Como funciona
### 👥 Para o usuário
- Acessa o site e encontra informações sobre os planos disponíveis (individual, adesão, empresarial e familiar).

- Pode navegar por páginas específicas de cada plano para entender os detalhes.

- Cadastra-se via formulário em qualquer momento (pela Home, header ou botão flutuante).

- Após o envio, os dados são armazenados no Supabase e aguardam contato de um corretor.

### 📞 Para o corretor
- Acessa a área restrita de login.

- Após o login, tem acesso ao seu painel com os leads atribuídos.

- O sistema atribui o lead automaticamente ao corretor com menos leads no momento.

- Se o lead não for contatado em até 5 dias, ele é redistribuído para outro corretor.

- O corretor pode marcar um lead como "contatado", movendo-o para a seção de "leads contatados".

#### Exibe todas as informações disponíveis do lead, como:

- Nome

- Telefone

- E-mail

- Preferência de contato

- Se possui plano ativo

- Se possui CNPJ

- Se possui ensino superior

# 🛠️ Tecnologias Utilizadas

<img src="https://skillicons.dev/icons?i=ts,react,tailwind,nextjs,supabase,nodejs" alt="Tecnologias utilizadas" />


#### Parte adicional
- AppRouter e TurboPack do NextJS 
- React-Icons para icones  

# 🚀 Como rodar o projeto
Clone este repositório.

Instale as dependências com npm install.

Crie um arquivo .env com suas credenciais do Supabase:

- env
- Copiar
- Editar

```js
NEXT_PUBLIC_SUPABASE_URL=<sua-url-do-supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<sua-anon-key>

```
- Execute o projeto:
```js
npm run dev
```

# 📝 Status do Projeto
#### 🔧 Finalizado para uso interno.

#### 🔒 A autenticação funciona, mas não utiliza JWT.

#### 📤 Ainda não está hospedado na Vercel.

#### 💼 Considerando venda ou implantação com domínio próprio.

# 📂 Estrutura do Projeto
A estrutura completa do projeto pode ser visualizada no diretório src/, organizada por áreas como:

- **app**/ – páginas e rotas principais

- **components**/ – componentes reutilizáveis da UI

- **lib/supabase.ts** – conexão com o Supabase

# 📱 Contato via WhatsApp
Um botão flutuante no canto inferior da tela permite que os usuários entrem diretamente em contato via WhatsApp com um dos corretores.

# 📜 Estrutura somente de arquivos do projeto
```js
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂session
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂leads
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂redistribuir-leads
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂corretores
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂painel
 ┃ ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂formulario
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂plano-adesao
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂plano-empresarial
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂plano-familiar
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂plano-individual
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂politica
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂servicos
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂sobre
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂AddInfo
 ┃ ┃ ┗ 📜AddInfo.tsx
 ┃ ┣ 📂BenefitsSection
 ┃ ┃ ┗ 📜BenefitsSection.tsx
 ┃ ┣ 📂CardList
 ┃ ┃ ┗ 📜CardList.tsx
 ┃ ┣ 📂ContentContainer
 ┃ ┃ ┗ 📜ContentContainer.tsx
 ┃ ┣ 📂ContractTypesSection
 ┃ ┃ ┗ 📜ContractTypesSection.tsx
 ┃ ┣ 📂corretores
 ┃ ┃ ┣ 📜CorretorHeader.tsx
 ┃ ┃ ┣ 📜CorretorStats.tsx
 ┃ ┃ ┣ 📜LeadCard.tsx
 ┃ ┃ ┣ 📜LeadRow.tsx
 ┃ ┃ ┣ 📜LeadTable.tsx
 ┃ ┃ ┣ 📜Pagination.tsx
 ┃ ┃ ┗ 📜Tabs.tsx
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┣ 📜EmptyState.tsx
 ┃ ┃ ┣ 📜ErrorState.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜LoadingSpinner.tsx
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┣ 📂FloatingWhatsAppButton
 ┃ ┃ ┗ 📜FloatingWhatsAppButton.tsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜CorretorFooter.tsx
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜FormFieldWrapper.tsx
 ┃ ┃ ┣ 📜FormNotice.tsx
 ┃ ┃ ┣ 📜InputField.tsx
 ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┗ 📜SelectField.tsx
 ┃ ┣ 📂FormRedirectButton
 ┃ ┃ ┗ 📜FormRedirectButton.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜CorretorHeader.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂HealthPlansSection
 ┃ ┃ ┗ 📜HealthPlansSection.tsx
 ┃ ┣ 📂HeroSection
 ┃ ┃ ┗ 📜HeroSection.tsx
 ┃ ┣ 📂HowItWorksSection
 ┃ ┃ ┗ 📜HowItWorksSection.tsx
 ┃ ┣ 📂Painel
 ┃ ┃ ┣ 📜EmptyNotifications.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜NotificationItem.tsx
 ┃ ┃ ┣ 📜NotificationList.tsx
 ┃ ┃ ┣ 📜NotificationsHeader.tsx
 ┃ ┃ ┣ 📜Reminder.tsx
 ┃ ┃ ┗ 📜SummaryCard.tsx
 ┃ ┣ 📂PlanLinks
 ┃ ┃ ┗ 📜PlanLinks.tsx
 ┃ ┗ 📂Section
 ┃ ┃ ┗ 📜Section.tsx
 ┗ 📂lib
 ┃ ┗ 📜supabase.ts
```