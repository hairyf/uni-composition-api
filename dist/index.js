import VueCompositionAPI from '@vue/composition-api';
import compositionPatch from './applets-repair';
import { PLATFORM } from './global';
export default (Vue) => {
    if (PLATFORM !== 'h5')
        compositionPatch();
    Vue.use(VueCompositionAPI);
};
export * from './lifecycle-hooks';
