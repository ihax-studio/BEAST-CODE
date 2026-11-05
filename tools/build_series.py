"""courses/*.js の教材データを index.html の SERIES ブロックへ埋め込む（index.html 1ファイルで完結させるため）。
使い方: python3 tools/build_series.py"""
import glob, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(ROOT, 'index.html')
s = open(P, encoding='utf8').read()
files = sorted(glob.glob(os.path.join(ROOT, 'courses', '*.js')))
body = '\n'.join('/* ---- courses/%s ---- */\n%s' % (os.path.basename(f), open(f, encoding='utf8').read().replace('</script', '<\\/script')) for f in files)
a = s.index('/*SERIES-BEGIN*/') + len('/*SERIES-BEGIN*/'); b = s.index('/*SERIES-END*/')
s = s[:a] + '\n' + body + '\n' + s[b:]
open(P, 'w', encoding='utf8').write(s)
print('embedded', len(files), 'files')
