<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import Api from "@/api.js";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
    };
  },

  created() {
    Api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
