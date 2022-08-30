import{o as n,c as a,a as s}from"./app.e9f7bbae.js";const t='{"title":"Table 表格组件","description":"","frontmatter":{},"headers":[{"level":2,"title":"用法","slug":"用法"},{"level":3,"title":"refTable","slug":"reftable"},{"level":3,"title":"useTable","slug":"usetable"},{"level":2,"title":"Table 属性","slug":"table-属性"},{"level":3,"title":"Columns","slug":"columns"},{"level":3,"title":"Pagination","slug":"pagination"},{"level":2,"title":"Table 方法","slug":"table-方法"},{"level":2,"title":"Table 插槽","slug":"table-插槽"}],"relativePath":"components/table.md","lastUpdated":1661828738050}',p={},e=s('<h1 id="table-表格组件"><a class="header-anchor" href="#table-表格组件" aria-hidden="true">#</a> Table 表格组件</h1><p>对 <code>element-plus</code> 的 <code>Table</code> 组件进行封装，只需传入 <code>columns</code> 与 <code>data</code> 参数，即可渲染出响应的表格出来。</p><p>Table 组件位于 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/Table" target="_blank" rel="noopener noreferrer">src/components/Table</a> 内</p><h2 id="用法"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>TableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;title1&#39;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&#39;author1&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;title2&#39;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&#39;author2&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;title2&#39;</span><span class="token punctuation">,</span>\n    author<span class="token operator">:</span> <span class="token string">&#39;author2&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h3 id="reftable"><a class="header-anchor" href="#reftable" aria-hidden="true">#</a> refTable</h3><p>如果只使用 <code>refTable</code>，所有参数都需要手动传入到 <code>Table</code> 组件中，推荐配合 <code>useTable</code> 使用。</p><h3 id="usetable"><a class="header-anchor" href="#usetable" aria-hidden="true">#</a> useTable</h3><p>复杂点的例子，请<a href="https://element-plus-admin.cn/#/components/table/use-table" target="_blank" rel="noopener noreferrer">在线预览</a></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Table&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getTableListApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/table&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> TableData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/table/types&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useTable&#39;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>TableColumn<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;author&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;display_time&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;displayTime&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;pageviews&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;pageviews&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    field<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>\n    label<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> tableObject<span class="token punctuation">,</span> methods <span class="token punctuation">}</span> <span class="token operator">=</span> useTable<span class="token operator">&lt;</span>TableData<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  getListApi<span class="token operator">:</span> getTableListApi<span class="token punctuation">,</span>\n  response<span class="token operator">:</span> <span class="token punctuation">{</span>\n    list<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>\n    total<span class="token operator">:</span> <span class="token string">&#39;total&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  props<span class="token operator">:</span> <span class="token punctuation">{</span>\n    columns\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> getList <span class="token punctuation">}</span> <span class="token operator">=</span> methods\n\n<span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>pageSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.pageSize<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>currentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.currentPage<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.tableList<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableObject.loading<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n      total: tableObject.total\n    }<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h4 id="参数介绍"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h4><div class="language-ts"><pre><code>\n<span class="token keyword">interface</span> <span class="token class-name">Response</span> <span class="token punctuation">{</span>\n  total<span class="token operator">:</span> <span class="token builtin">number</span>\n  list<span class="token operator">:</span> TableData<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> register<span class="token punctuation">,</span> tableObject<span class="token punctuation">,</span> methods<span class="token punctuation">,</span> elTableRef <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useTable</span><span class="token generic class-name"><span class="token operator">&lt;</span>TableData<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>props<span class="token operator">:</span> UseTableConfig<span class="token punctuation">)</span>\n</code></pre></div><p><strong>useTable</strong> 可以传入自定义类型 <code>&lt;T&gt;</code></p><ul><li>T 代表接口返回的表格数据类型。</li></ul><p>在实际需求中，可能会遇到分页参数命名不同的情况，请自行在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useTable.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useTable.ts</a> 进行替换，搜索 <code>pageSize</code> 及 <code>pageIndex</code>。</p><p><strong>props</strong></p><p>在使用 <code>useTable</code> 的时候，可以在 <code>props</code> 中传入 <code>getListApi</code>，以及 <code>response</code>，之后就可以手动调用 <code>methods.getList()</code> 方法请求表格数据了。每次表格分页时，则会自动调用接口。</p><p>如果需要使用删除方法 <code>methods.delList()</code>，则需要在 <code>props</code> 中传入 <code>delListApi</code> 参数，用于删除时调用接口，目前本项目中单条删除或者批量删除，都是同样的接口同样的参数。如果与实际需求不符，可以自行改造。在 <a href="https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/hooks/web/useTable.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useTable.ts</a> 的 <code>delList</code> 以及 <code>delData</code> 中修改。</p><div class="language-ts"><pre><code><span class="token comment">// 删除数据</span>\n<span class="token function-variable function">delList</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ids<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> message <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> tableRef <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>multiple<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tableRef<span class="token operator">?.</span>selections<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      ElMessage<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delNoData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tableObject<span class="token punctuation">.</span>currentRow<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      ElMessage<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delNoData&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token keyword">return</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> paramsObj<span class="token operator">:</span> AxiosConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n    data<span class="token operator">:</span> <span class="token punctuation">{</span>\n      ids\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delMessage&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delWarning&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      confirmButtonText<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delOk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      cancelButtonText<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delCancel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      type<span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">await</span> <span class="token function">delData</span><span class="token punctuation">(</span>paramsObj<span class="token punctuation">,</span> ids<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">delData</span><span class="token punctuation">(</span>paramsObj<span class="token punctuation">,</span> ids<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">delData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>paramsObj<span class="token operator">:</span> AxiosConfig<span class="token punctuation">,</span> ids<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token punctuation">(</span>config<span class="token operator">?.</span>delListApi <span class="token operator">&amp;&amp;</span> config<span class="token operator">?.</span><span class="token function">delListApi</span><span class="token punctuation">(</span>paramsObj<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.delSuccess&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 计算出临界点</span>\n    <span class="token keyword">const</span> currentPage <span class="token operator">=</span>\n      tableObject<span class="token punctuation">.</span>total <span class="token operator">%</span> tableObject<span class="token punctuation">.</span>pageSize <span class="token operator">===</span> ids<span class="token punctuation">.</span>length <span class="token operator">||</span> tableObject<span class="token punctuation">.</span>pageSize <span class="token operator">===</span> <span class="token number">1</span>\n        <span class="token operator">?</span> tableObject<span class="token punctuation">.</span>currentPage <span class="token operator">&gt;</span> <span class="token number">1</span>\n          <span class="token operator">?</span> tableObject<span class="token punctuation">.</span>currentPage <span class="token operator">-</span> <span class="token number">1</span>\n          <span class="token operator">:</span> tableObject<span class="token punctuation">.</span>currentPage\n        <span class="token operator">:</span> tableObject<span class="token punctuation">.</span>currentPage\n\n    tableObject<span class="token punctuation">.</span>currentPage <span class="token operator">=</span> currentPage\n    methods<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>register</strong></p><p><code>register</code> 用于注册 <code>useTable</code>，如果需要使用 <code>useTable</code> 提供的 <code>api</code>，必须将 <code>register</code> 传入组件的 <code>onRegister</code></p><p><strong>tableObject</strong></p><p>表格对象</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pageSize</td><td>每页显示多少条</td><td><code>number</code></td><td>-</td><td>10</td></tr><tr><td>currentPage</td><td>当前页</td><td><code>number</code></td><td>-</td><td>1</td></tr><tr><td>total</td><td>总条数</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td>tableList</td><td>表格数据</td><td><code>K[]</code></td><td>-</td><td>[]</td></tr><tr><td>parmasObj</td><td>AxiosConfig 配置</td><td><code>L</code></td><td>-</td><td>{}</td></tr><tr><td>loading</td><td>表格是否加载中</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>currentRow</td><td>当前选中数据</td><td><code>Nullable&lt;K&gt;</code></td><td>-</td><td>-</td></tr></tbody></table><p><strong>methods</strong></p><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setProps</td><td>用于表格组件属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>getList</td><td>获取表格数据</td><td><code>() =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>setColumn</td><td>设置表头结构</td><td>(columnProps: TableSetPropsType[]) =&gt; void</td></tr><tr><td>setSearchParmas</td><td>与 Search 组件配置，用于获取 Search 组件返回的查询数据</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>getSelections</td><td>获取多选数据</td><td>() =&gt; Promise&lt;K[]&gt;</td></tr><tr><td>delList</td><td>删除数据接口</td><td><code>(ids: string[], multiple: boolean, message?: boolean) =&gt; Promise&lt;void&gt;</code></td></tr></tbody></table><p><strong>elTableRef</strong></p><p>当前 <code>elTable</code> 实例，可使用所有 <code>elTable</code> 实例方法。</p><h2 id="table-属性"><a class="header-anchor" href="#table-属性" aria-hidden="true">#</a> Table 属性</h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Table</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/table.html#table-attributes" target="_blank" rel="noopener noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pageSize</td><td>每页显示多少条，支持 v-model 双向绑定</td><td><code>number</code></td><td>-</td><td>10</td></tr><tr><td>currentPage</td><td>当前页，支持 v-model 双向绑定</td><td><code>number</code></td><td>-</td><td>1</td></tr><tr><td>selection</td><td>是否多选</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>showOverflowTooltip</td><td>是否所有的超出隐藏，优先级低于 schema 中的 showOverflowTooltip</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>columns</td><td>表头结构，<a href="#Columns">详见</a></td><td><code>TableColumn[]</code></td><td>-</td><td>[]</td></tr><tr><td>expand</td><td>是否显示展开行</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>pagination</td><td>是否展示分页，<a href="#Pagination">详见</a></td><td><code>Pagination</code>/<code>undefined</code></td><td>-</td><td>-</td></tr><tr><td>reserveSelection</td><td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>reserveIndex</td><td>是否叠加索引</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>align</td><td>内容对齐方式</td><td><code>string</code></td><td><code>left</code>/<code>center</code>/<code>right</code></td><td>left</td></tr><tr><td>headerAlign</td><td>表头对齐方式</td><td><code>string</code></td><td><code>left</code>/<code>center</code>/<code>right</code></td><td>left</td></tr><tr><td>data</td><td>表格数据</td><td><code>Recordable[]</code></td><td>-</td><td>[]</td></tr></tbody></table><h3 id="columns"><a class="header-anchor" href="#columns" aria-hidden="true">#</a> Columns<span id="Columns"></span></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>field</td><td>唯一值，如需展示正确的数据，需要与 data 中的属性名对应</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>表头名称</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>children</td><td>子项，用于多级表头</td><td><code>TableColumn[]</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="pagination"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination<span id="Pagination"></span></h3><p>支持 <code>element-plus</code> 的 <code>Pagination</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">详见</a></p><h2 id="table-方法"><a class="header-anchor" href="#table-方法" aria-hidden="true">#</a> Table 方法</h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setProps</td><td>用于设置表格属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>setColumn</td><td>用于修改表头结构</td><td>(columnProps: TableSetPropsType[]) =&gt; void</td></tr></tbody></table><h2 id="table-插槽"><a class="header-anchor" href="#table-插槽" aria-hidden="true">#</a> Table 插槽</h2><table><thead><tr><th>插槽名</th><th>说明</th><th>子标签</th></tr></thead><tbody><tr><td>append</td><td>插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。</td><td>-</td></tr><tr><td>${field}</td><td>表格内容</td><td>-</td></tr><tr><td>${field}-header</td><td>表头内容</td><td>-</td></tr></tbody></table>',40);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
