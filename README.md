## Fallback 使用方式 1 默认显示 /

```html
<div
  class="text"
  v-hasPermission.fallback="['merchant:admin:vehicle:supervise:gps:location:realTime']"
>
  文案
</div>
```

### 编译后：

```html
<hasPermission :permission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  <div class="text">文案</div>
  <template #fallback> / </template>
</hasPermission>
```

## Fallback 使用方式 2 自定义显示

```html
<div
  class="text"
  fallback="自定义文案"
  v-hasPermission.fallback="['merchant:admin:vehicle:supervise:gps:location:realTime']"
>
  文案
</div>
```

### 编译后：

```html
<hasPermission :permission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  <div class="text">文案</div>
  <template #fallback> 自定义文案 </template>
</hasPermission>
```

## Fallback 使用方式 3 响应式自定义显示

````html
<div
  class="text"
  :fallback="'自定义文案' + v"
  v-hasPermission.fallback="['merchant:admin:vehicle:supervise:gps:location:realTime']"
>
  文案
</div>

```html
<hasPermission :permission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  <div class="text">文案</div>
  <template #fallback> {{'自定义文案' + v}} </template>
</hasPermission>
````

## Fallback 使用方式 4 渲染 HTML，可以是 Vue 组件，但是 fallback 不能是动态属性

```html
<div
  class="text"
  fallback="<el-button>5 {{text}}</el-button>"
  v-hasPermission.fallback="['merchant:admin:vehicle:supervise:gps:location:realTime']"
>
  文案
</div>
```

### 编译后

```html
<hasPermission :permission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  <div class="text">文案</div>
  <template #fallback> <el-button>5 {{text}}</el-button> </template>
</hasPermission>
```

## 默认权限显示方式

```html
<div class="text" v-hasPermission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  文案
</div>
```

### 编译后

```html
<hasPermission :permission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  <div class="text">文案</div>
</hasPermission>
```

## 可以显示但是希望禁止操作

```html
<div class="text" v-hasPermission.link="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  文案
</div>
```

### 编译后

```html
<hasPermission link :permission="['merchant:admin:vehicle:supervise:gps:location:realTime']">
  <div class="text">文案</div>
</hasPermission>
```
