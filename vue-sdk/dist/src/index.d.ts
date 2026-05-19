import { App } from 'vue';
export * from './core/engine';
export * from './data/index';
export * from './validator/index';
export * from './components/index';
export * from './templates/index';
export declare const VueSdk: {
    install(app: App): void;
};
export default VueSdk;
