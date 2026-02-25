/* =========================
Persistencia
========================= */

class ArticleStorage {

  static KEY = "articles";


  static findAll() {

    const data = localStorage.getItem(this.KEY);


    if (!data) {

      const mock = [

        {
          id: 1,
          title: "Sistema de revisión por pares usando PWA",
          date: "2026-02-24",
          status: "draft"
        },

        {
          id: 2,
          title: "Arquitectura offline-first para aplicaciones académicas",
          date: "2026-02-20",
          status: "review"
        },

        {
          id: 3,
          title: "Evaluación de IndexedDB en PWAs",
          date: "2026-02-15",
          status: "reviewed"
        }

      ];


      localStorage.setItem(this.KEY, JSON.stringify(mock));


      return mock;

    }


    return JSON.parse(data);

  }

}


/* =========================
Lógica
========================= */

class DashboardService {

  static getArticles() {

    const articles = ArticleStorage.findAll();


    return articles.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

  }

}


/* =========================
UI
========================= */

class DashboardView {

  static init() {

    const articles = DashboardService.getArticles();

    this.render(articles);

  }


  static render(articles) {

    const tbody = document.getElementById("articlesBody");

    tbody.innerHTML = "";


    if (articles.length === 0) {

      tbody.innerHTML =
        `
<tr>
<td colspan="3" class="empty">
No hay artículos
</td>
</tr>
`;

      return;

    }


    articles.forEach(article => {

      const tr = document.createElement("tr");


      tr.innerHTML =
        `
<td>${article.title}</td>
<td>${article.date}</td>
<td>
<span class="status status-${article.status}">
${this.statusLabel(article.status)}
</span>
</td>
`;


      tbody.appendChild(tr);

    });

  }


  static statusLabel(status) {

    switch (status) {

      case "draft":
        return "Borrador";

      case "review":
        return "En revisión";

      case "reviewed":
        return "Revisado";

      default:
        return status;

    }

  }

}


DashboardView.init();