<script setup>
import { onMounted, ref } from "vue";
import { BContainer, BRow, BCol, BCard, BButton } from 'bootstrap-vue-3'
import ApiService from "@/foundation/api-service.js"

const user = ref(null)
onMounted(() => {
  ApiService.getUser()
    .then(response => {
      user.value = response.data
    })
    .catch(err => {
      console.error(err)
    })
})
</script>

<template>
  <main class="top-page">
    <!-- Hero Section -->
    <section class="hero d-flex align-items-center text-center">
      <div class="overlay"></div>
      <div class="hero-content w-100 px-3">
        <h1 class="hero-title mb-2">
          <span v-if="user" class="d-block mb-2">こんにちは、{{ user.name }}さん！</span>
          私のポートフォリオへようこそ
        </h1>
        <p class="hero-subtitle mb-4">
          プログラミング、ビジネス、エンターテイメントの3つの軸で新たな価値を提供します。
        </p>
        <b-button variant="outline-light" class="hero-btn" size="lg">
          はじめる
        </b-button>
      </div>
    </section>

    <!-- 3 Axis Intro Section -->
    <b-container fluid class="content-section py-5">
      <b-row class="text-center mb-5">
        <b-col>
          <h2 class="section-title">3つの専門領域</h2>
          <p class="section-description mx-auto">
            最新の技術力を活かしたプログラミング、戦略的な視点でのビジネス展開、そして人々を惹きつけるエンターテイメントで、あらゆる課題に対応します。
          </p>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <!-- Programming Card -->
        <b-col md="4" class="mb-4 d-flex">
          <b-card class="content-card h-100 w-100" no-body>
            <b-card-body class="d-flex flex-column align-items-center text-center">
              <i class="bi bi-code-slash icon-size mb-3"></i>
              <h4 class="card-title mb-3">プログラミング</h4>
              <p class="card-text mb-4">
                高品質なコードとスケーラブルなアーキテクチャで、堅牢なソフトウェアを構築します。
              </p>
              <b-button variant="primary" size="sm">詳しく見る</b-button>
            </b-card-body>
          </b-card>
        </b-col>

        <!-- Business Card -->
        <b-col md="4" class="mb-4 d-flex">
          <b-card class="content-card h-100 w-100" no-body>
            <b-card-body class="d-flex flex-column align-items-center text-center">
              <i class="bi bi-bar-chart-line icon-size mb-3"></i>
              <h4 class="card-title mb-3">ビジネス</h4>
              <p class="card-text mb-4">
                戦略的なマーケット分析と的確な意思決定で、ビジネス成長を加速させます。
              </p>
              <b-button variant="primary" size="sm">詳しく見る</b-button>
            </b-card-body>
          </b-card>
        </b-col>

        <!-- Entertainment Card -->
        <b-col md="4" class="mb-4 d-flex">
          <b-card class="content-card h-100 w-100" no-body>
            <b-card-body class="d-flex flex-column align-items-center text-center">
              <i class="bi bi-film icon-size mb-3"></i>
              <h4 class="card-title mb-3">エンターテイメント</h4>
              <p class="card-text mb-4">
                クリエイティブなコンテンツと魅力的なストーリーテリングで、多様なオーディエンスを惹きつけます。
              </p>
              <b-button variant="primary" size="sm">詳しく見る</b-button>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- 実績セクション -->
    <b-container fluid class="work-section py-5">
      <b-row class="text-center mb-5">
        <b-col>
          <h2 class="section-title">実績紹介</h2>
          <p class="section-description mx-auto">
            過去に手掛けたプロジェクトや制作物の一部をご紹介します。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="3" class="mb-4">
          <b-card class="work-card h-100">
            <b-card-img src="/images/work1.jpg" alt="Work 1"></b-card-img>
            <b-card-body>
              <h5 class="card-title">プロジェクトA</h5>
              <p class="card-text">最新フレームワークを用いたWebサービス開発プロジェクト</p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="3" class="mb-4">
          <b-card class="work-card h-100">
            <b-card-img src="/images/work2.jpg" alt="Work 2"></b-card-img>
            <b-card-body>
              <h5 class="card-title">プロジェクトB</h5>
              <p class="card-text">新規ビジネス戦略立案・実行サポートプロジェクト</p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col md="3" class="mb-4">
          <b-card class="work-card h-100">
            <b-card-img src="/images/work3.jpg" alt="Work 3"></b-card-img>
            <b-card-body>
              <h5 class="card-title">プロジェクトC</h5>
              <p class="card-text">動画コンテンツ制作・配信によるブランディング強化</p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- お問い合わせセクション -->
    <b-container fluid class="contact-section py-5">
      <b-row class="text-center mb-5">
        <b-col>
          <h2 class="section-title">お問い合わせ</h2>
          <p class="section-description mx-auto">
            ご依頼やご質問などがございましたら、お気軽にご連絡ください。
          </p>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="contact-form p-4 text-center">
            <p>メールアドレスやお問い合わせ内容をお知らせください。</p>
            <b-button variant="outline-primary" size="lg">お問い合わせフォームへ</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </main>
</template>

<style scoped lang="scss">
.top-page {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;

  .hero {
    position: relative;
    height: 70vh;
    background: url('/images/logo.svg') center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3));
      z-index: 1;
    }
    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 700px;
      margin: 0 auto;
      color: #fff;
    }
    .hero-title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
    }
    .hero-subtitle {
      font-size: 1.1rem;
      font-weight: 300;
    }
    .hero-btn {
      border: 2px solid #fff;
      color: #fff;
      transition: all 0.3s ease;
      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }

  .content-section {
    background: #f9f9f9;
    .section-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .section-description {
      max-width: 600px;
      font-size: 1.1rem;
      color: #555;
    }

    .content-card {
      border: none;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }

      .card-title {
        font-size: 1.4rem;
        font-weight: 600;
      }
      .card-text {
        font-size: 1rem;
        color: #555;
      }

      .icon-size {
        font-size: 2rem;
        color: #007bff;
      }
    }
  }

  .work-section {
    background: #fff;
    .section-title {
      font-size: 2rem;
      font-weight: bold;
    }
    .section-description {
      max-width: 600px;
      font-size: 1.1rem;
      color: #555;
    }
    .work-card {
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      img {
        width: 100%;
        height: auto;
      }
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }
      .card-title {
        font-size: 1.2rem;
        font-weight: 600;
      }
      .card-text {
        font-size: 1rem;
        color: #555;
      }
    }
  }

  .contact-section {
    background: #f9f9f9;
    .section-title {
      font-size: 2rem;
      font-weight: bold;
    }
    .section-description {
      max-width: 600px;
      font-size: 1.1rem;
      color: #555;
    }
    .contact-form {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
  }

}
</style>
