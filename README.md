# 🌤️ WeatherApp API Flask

> Uma aplicação web moderna para consulta de informações meteorológicas e horário local em tempo real.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.1.0-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/Status-Active-success.svg)

## 📋 Sobre o Projeto

O **WeatherApp API Flask** é uma aplicação web desenvolvida em Python com Flask que fornece informações meteorológicas detalhadas e horário local para qualquer cidade do mundo. A aplicação conta com uma interface moderna e responsiva, utilizando efeitos visuais avançados como glassmorphism e animações CSS.

### ✨ Principais Funcionalidades

- 🌍 **Consulta global**: Pesquise o clima de qualquer cidade do mundo
- 🕐 **Horário local**: Exibe automaticamente o horário atual da cidade consultada
- 🎨 **Interface moderna**: Design responsivo com efeitos glassmorphism
- 🎬 **Backgrounds dinâmicos**: Vídeos de fundo baseados nas condições climáticas
- 📱 **Responsivo**: Otimizado para desktop, tablet e mobile
- ⚡ **Tempo real**: Dados atualizados da OpenWeatherMap API

## 🚀 Demonstração

### Tela Inicial
- Interface elegante com efeito glassmorphism
- Campo de busca com autocomplete
- Animações suaves e efeitos visuais

### Página de Resultados
- Informações detalhadas do clima
- Vídeo de fundo baseado nas condições meteorológicas
- Cards informativos com dados organizados
- Animações e efeitos visuais interativos

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.8+** - Linguagem principal
- **Flask 3.1.0** - Framework web
- **Requests 2.32.3** - Requisições HTTP
- **PyTZ 2024.2** - Manipulação de fusos horários
- **TimezoneFinder 6.2.0** - Detecção automática de fuso horário

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Grid e Flexbox
- **JavaScript** - Interatividade e validações
- **Responsive Design** - Mobile-first approach

### APIs Externas
- **OpenWeatherMap API** - Dados meteorológicos em tempo real

## 📦 Instalação e Configuração

### Pré-requisitos
- Python 3.8 ou superior
- Pip (gerenciador de pacotes Python)
- Chave de API da OpenWeatherMap

### 1. Clone o repositório
```bash
git clone https://github.com/Flowzinnn/WeatherAppAPIFlask.git
cd WeatherAppAPIFlask
```

### 2. Crie e ative o ambiente virtual
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 3. Instale as dependências
```bash
pip install -r requirements.txt
```

### 4. Configure a API Key
1. Registre-se em [OpenWeatherMap](https://openweathermap.org/api)
2. Obtenha sua chave de API gratuita
3. Substitua a chave no arquivo `app.py`:
```python
WEATHER_API_KEY = 'sua_chave_aqui'
```

### 5. Execute a aplicação
```bash
python app.py
```

A aplicação estará disponível em `http://localhost:5000`

## 📁 Estrutura do Projeto

```
worldtime_weather/
│
├── app.py                 # Aplicação principal Flask
├── requirements.txt       # Dependências Python
├── main.bat              # Script de execução (Windows)
│
├── static/               # Arquivos estáticos
│   ├── style.css        # CSS principal
│   ├── animations.css   # Animações CSS
│   ├── visual-effects.css # Efeitos visuais avançados
│   ├── script.js        # JavaScript principal
│   └── videos/          # Vídeos de fundo
│
├── templates/           # Templates HTML
│   ├── index.html      # Página inicial
│   └── result.html     # Página de resultados
│
└── venv/               # Ambiente virtual Python
```

## 🎨 Recursos Visuais

### Sistema de Design
- **Glassmorphism**: Efeitos de vidro translúcido
- **Gradientes dinâmicos**: Cores que mudam suavemente
- **Animações CSS**: Transições e movimentos fluidos
- **Partículas flutuantes**: Efeitos de background animados

### Responsividade
- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para diferentes tamanhos de tela
- **Touch Friendly**: Interface amigável para touch screens

## 🔧 Funcionalidades Técnicas

### Detecção Automática de Fuso Horário
```python
def get_time(lat, lon):
    tf = TimezoneFinder()
    timezone_str = tf.timezone_at(lat=lat, lng=lon)
    tz = pytz.timezone(timezone_str)
    now = datetime.now(tz)
    return now.strftime('%H:%M'), now.hour
```

### Integração com API
```python
def get_weather(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={WEATHER_API_KEY}&units=metric&lang=pt"
    response = requests.get(url)
    return response.json()
```

## 📊 Dados Fornecidos

- **Temperatura**: Atual, sensação térmica, mínima e máxima
- **Condições**: Descrição detalhada do tempo
- **Umidade**: Percentual de umidade do ar
- **Pressão**: Pressão atmosférica
- **Visibilidade**: Distância de visibilidade
- **Vento**: Velocidade e direção
- **Horário**: Hora local da cidade consultada
- **Coordenadas**: Latitude e longitude

## 🌟 Melhorias Futuras

- [ ] **Cache de dados**: Implementar cache para reduzir chamadas à API
- [ ] **Previsão estendida**: Adicionar previsão para 5-7 dias
- [ ] **Geolocalização**: Detecção automática da localização do usuário
- [ ] **Múltiplas cidades**: Comparação entre diferentes cidades
- [ ] **Notificações**: Alertas meteorológicos
- [ ] **Histórico**: Dados históricos de consultas
- [ ] **Tema escuro**: Alternância entre modo claro e escuro
- [ ] **PWA**: Transformar em Progressive Web App

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Flowzinnn**
- GitHub: [@Flowzinnn](https://github.com/Flowzinnn)

## 🙏 Agradecimentos

- [OpenWeatherMap](https://openweathermap.org/) - API de dados meteorológicos
- [Flask](https://flask.palletsprojects.com/) - Framework web Python
- [TimezoneFinder](https://github.com/jannikmi/timezonefinder) - Biblioteca de fuso horário
- Comunidade Python - Suporte e documentação

---

⭐ **Gostou do projeto? Deixe uma estrela!**

📧 **Encontrou algum bug?** Abra uma [issue](https://github.com/Flowzinnn/WeatherAppAPIFlask/issues)

🚀 **Quer contribuir?** Veja como [contribuir](#-contribuindo)
