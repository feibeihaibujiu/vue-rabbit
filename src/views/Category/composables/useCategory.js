//封装分类数据业务代码
import { ref,onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";
import { onBeforeRouteUpdate } from "vue-router";

export const useCategory = () => {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory())
  //路由发生变化时 分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return { categoryData }
};
