import rollupCommonjs from '@rollup/plugin-commonjs';
import { esbuildPlugin } from "@web/dev-server-esbuild";
import { fromRollup } from '@web/dev-server-rollup';

const commonjs = fromRollup(rollupCommonjs);


export default {
  nodeResolve: true,
  plugins: [
    commonjs(),
    esbuildPlugin({ tsx: true, jsxFactory: "React.createElement", jsxFragment: "Fragment" }),
  ],
};
