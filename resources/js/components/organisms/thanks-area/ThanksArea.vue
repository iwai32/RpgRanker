<template>
  <section class="thanks-area">

    <section-title>素材提供</section-title>

    <dl class="providers">
      <dt class="genre">キャラクター</dt>
      <dd class="name">
        <a href="https://blog.goo.ne.jp/akarise">ゆうひな様</a>
      </dd>

      <dt class="genre">モンスター</dt>
      <dd class="name">
        <a href="http://mwhidesp.konjiki.jp/">material world様</a>
        <a href="http://makapri.web.fc2.com/">王国興亡記様</a>
      </dd>

      <dt class="genre">エフェクト</dt>
      <dd class="name">
        <a href="https://pipoya.net/">ぴぽや様</a>
      </dd>
    </dl>

  </section>
</template>

<script>
import SectionTitle from '../../atoms/common/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../sass/app.scss';
.providers {
  color: $text-color;
  padding: 10px;
  line-height: 1.5;
  .genre + .name {
    margin-bottom: 20px;
  }
  .genre {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
  .name {
    font-size: 1.2rem;
    text-decoration: underline;
    &>a {
      color: $text-color;
      display: block;
    }
  }
  @include tab {
    .genre + .name {
    margin-bottom: 40px;
  }
  .genre {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  .name {
    font-size: 1.8rem;
  }
  }
}
</style>