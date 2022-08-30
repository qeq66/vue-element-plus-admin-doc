import{o as a,c as t,a as n}from"./app.044db66b.js";const s='{"title":"ImageViewer 图片预览组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":2,"title":"createImageViewer","slug":"createimageviewer"},{"level":3,"title":"参数","slug":"参数"}],"relativePath":"components/image-viewer.md","lastUpdated":1661828693782}',e={},p=n('<h1 id="imageviewer-图片预览组件"><a class="header-anchor" href="#imageviewer-图片预览组件" aria-hidden="true">#</a> ImageViewer 图片预览组件</h1><p>将 <code>element-plus</code> 的 <code>ImageViewer</code> 组件函数化，通过函数方便创建组件。</p><p>ImageViewer 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/ImageViewer" target="_blank" rel="noopener noreferrer">src/components/ImageViewer</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createImageViewer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ImageViewer&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">createImageViewer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    urlList<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&#39;https://img1.baidu.com/it/u=657828739,1486746195&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;https://img0.baidu.com/it/u=3114228356,677481409&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;https://img1.baidu.com/it/u=508846955,3814747122&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;https://img1.baidu.com/it/u=3536647690,3616605490&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;https://img1.baidu.com/it/u=4087287201,1148061266&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;https://img2.baidu.com/it/u=3429163260,2974496379&amp;fm=26&amp;fmt=auto&amp;gp=0.jpg&#39;</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>预览<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="createimageviewer"><a class="header-anchor" href="#createimageviewer" aria-hidden="true">#</a> createImageViewer</h2><h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>urlList</td><td>图片列表</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td>zIndex</td><td>层级</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td>initialIndex</td><td>默认展示第几张</td><td><code>number</code></td><td>-</td><td>1</td></tr><tr><td>infinite</td><td>是否可以循环切换</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>hideOnClickModal</td><td>点击蒙版是否关闭</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>appendToBody</td><td>是否添加到 body 中</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>show</td><td>是否显示图片预览</td><td><code>boolean</code></td><td>-</td><td>false</td></tr></tbody></table>',8);e.render=function(n,s,e,o,c,l){return a(),t("div",null,[p])};export default e;export{s as __pageData};
