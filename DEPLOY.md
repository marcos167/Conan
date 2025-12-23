# 🚀 Guia de Deploy - Show Superaplicativo

## ✅ Deploy Concluído!

🌐 **URL de Produção**: https://conan-gamma.vercel.app

O aplicativo está online e funcionando perfeitamente com todos os 8 módulos!

---

## ✅ Código no GitHub

O código foi enviado com sucesso para:
**https://github.com/marcos167/Conan**

---

## 🌐 Deploy para Produção (Vercel)

### Opção 1: Deploy Automático via Vercel Dashboard (Recomendado)

1. **Acesse Vercel**: https://vercel.com
2. **Faça login** com sua conta GitHub
3. **Clique em "Add New Project"**
4. **Importe o repositório**: `marcos167/Conan`
5. **Configure o projeto**:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. **Clique em "Deploy"**

✨ **Pronto!** Vercel irá:
- Instalar dependências
- Fazer build do projeto
- Deploy automático
- Gerar URL de produção (ex: `show-app.vercel.app`)

### Opção 2: Deploy via CLI

```bash
# Na pasta do projeto
cd y:\99Freelas\seila\show-app

# Login no Vercel
vercel login

# Deploy
vercel --prod
```

---

## 🔧 Configurações Importantes

### Variáveis de Ambiente (se necessário)

No dashboard da Vercel, adicione em **Settings > Environment Variables**:

```env
# Exemplo de variáveis para produção
NEXT_PUBLIC_API_URL=https://api.show-app.com
NEXT_PUBLIC_APP_NAME=Show
```

### Domínio Customizado

1. Vá em **Settings > Domains**
2. Adicione seu domínio customizado
3. Configure DNS conforme instruções

---

## 📊 Status do Deploy

### ✅ Concluído
- [x] Código enviado para GitHub
- [x] Repositório configurado
- [x] Vercel CLI instalado
- [x] Configuração Vercel criada

### 🔄 Próximos Passos
- [ ] Fazer login na Vercel
- [ ] Importar repositório
- [ ] Deploy para produção
- [ ] Configurar domínio (opcional)

---

## 🌍 URLs

- **GitHub**: https://github.com/marcos167/Conan
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Produção**: (será gerado após deploy)

---

## 🎯 Comandos Úteis

```bash
# Ver status do deploy
vercel ls

# Ver logs
vercel logs

# Rollback para versão anterior
vercel rollback

# Remover deploy
vercel remove
```

---

## 📝 Notas

- O deploy na Vercel é **gratuito** para projetos Next.js
- Build automático a cada push no GitHub
- HTTPS automático
- CDN global
- Previews automáticos para PRs

---

**Desenvolvido para Conan - ShoppingNow LTD** 🚀
