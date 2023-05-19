/*
 * @Author: 大蒙
 * @Date: 2023-05-19 14:45:30
 * @LastEditors: 大蒙
 * @LastEditTime: 2023-05-19 17:56:02
 * @FilePath: /vue3-ts/vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2023, All Rights Reserved. 
 */
import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    console.log(process.env, command, mode);
    // console.log(command, mode, import.meta.env.VITE_APP_TITLE);
    // const env = loadEnv(mode, process.cwd(), '')
    // console.log(env.NODE_ENV, command, mode, process.env, import.meta);
    return {
        plugins: [
            vue({ "propsDestructure": true } as any)
        ],
    }
})
