import path from 'path'
import os from 'os'

const isDev = process.env.NODE_ENV === 'development'
const isWin = process.platform === 'win32'

// 服务端IP和端口
export const serviceUrl = {
  face2face: isDev ? 'http://8.130.32.64:8383/easy' : 'http://8.130.32.64:8383/easy',
  tts: isDev ? 'http://8.130.32.64:18180' : 'http://8.130.32.64:18180'
}

// Samba目录配置
export const assetPath = {
  model: path.join('K:', 'heygem_data', 'face2face', 'temp'), // 模特视频
  ttsProduct: path.join('K:', 'heygem_data', 'face2face', 'temp'), //  TTS 产物
  ttsRoot: path.join('K:', 'heygem_data', 'voice', 'data'), // TTS服务根目录
  ttsTrain: path.join('K:', 'heygem_data', 'voice', 'data','origin_audio') // TTS 训练产物
}
