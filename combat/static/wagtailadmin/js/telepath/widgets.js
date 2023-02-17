(()=>{"use strict";var t,e={4870:function(t,e,n){var i,r=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o.apply(this,arguments)},a=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(i=o.next()).done;)a.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return a},s=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},u=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))};e.__esModule=!0;var l=n(9408),p=function(){function t(t,e,n,i,r){var o=':input[name="'+e+'"]';this.input=t.find(o).addBack(o),this.idForLabel=n,this.setState(i),this.parentCapabilities=r||new Map}return t.prototype.getValue=function(){return this.input.val()},t.prototype.getState=function(){return this.input.val()},t.prototype.setState=function(t){this.input.val(t)},t.prototype.getTextLabel=function(t){var e=this.getValue();if("string"!=typeof e)return null;var n=t&&t.maxLength;return n&&e.length>n?e.substring(0,n-1)+"…":e},t.prototype.focus=function(){this.input.focus()},t.prototype.setCapabilityOptions=function(t,e){Object.assign(this.parentCapabilities.get(t),e)},t}(),c=function(){function t(t,e){this.boundWidgetClass=p,this.html=t,this.idPattern=e}return t.prototype.render=function(t,e,n,i,r){var o=this.html.replace(/__NAME__/g,e).replace(/__ID__/g,n),a=this.idPattern.replace(/__ID__/g,n),s=$(o);return $(t).replaceWith(s),new this.boundWidgetClass(s,e,a,i,r)},t}();window.telepath.register("wagtail.widgets.Widget",c);var h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getValue=function(){return this.input.is(":checked")},e.prototype.getState=function(){return this.input.is(":checked")},e.prototype.setState=function(t){this.input.attr("checked",t||null)},e}(p),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.boundWidgetClass=h,e}return r(e,t),e}(c);window.telepath.register("wagtail.widgets.CheckboxInput",f);var d=function(){function t(t,e,n,i){this.element=t,this.name=e,this.idForLabel=n,this.selector='input[name="'+e+'"]:checked',this.setState(i)}return t.prototype.getValue=function(){return this.element.find(this.selector).val()},t.prototype.getState=function(){return this.element.find(this.selector).val()},t.prototype.setState=function(t){this.element.find('input[name="'+this.name+'"]').val([t])},t.prototype.focus=function(){this.element.find('input[name="'+this.name+'"]').focus()},t}(),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.boundWidgetClass=d,e}return r(e,t),e}(c);window.telepath.register("wagtail.widgets.RadioSelect",g);var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.getTextLabel=function(){return this.input.find(":selected").text()},e}(p),v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.boundWidgetClass=y,e}return r(e,t),e}(c);window.telepath.register("wagtail.widgets.Select",v);var w=function(){function t(t,e,n){this.html=t,this.idPattern=e,this.config=n}return t.prototype.render=function(t,e,n,i){var r=this.html.replace(/__NAME__/g,e).replace(/__ID__/g,n),o=$(r);$(t).replaceWith(o);var a=new PageChooser(n,null,this.config);return a.setState(i),a},t}();window.telepath.register("wagtail.widgets.PageChooser",w);var b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(e,n,i,r,o){var a=t.prototype.render.call(this,e,n,i,r,o);return window.autosize($("#"+i)),a},e}(c);window.telepath.register("wagtail.widgets.AdminAutoHeightTextInput",b);var m=function(){function t(t,e,n,i){this.widget=t,this.blockDef=e,this.addSibling=n,this.split=i,this.blockMax=n.getBlockMax(e.name),this.icon="#icon-".concat(e.meta.icon),this.description=e.meta.label,this.type=e.name}return t.prototype.render=function(t){var e=t.option,n="number"==typeof blockMax?" (".concat(this.addSibling.getBlockCount(this.blockDef.name),"/").concat(this.blockMax,")"):"";return"".concat(e.description).concat(n)},t.prototype.onSelect=function(t){var e=this,n=t.editorState,i=window.draftail.splitState(window.draftail.DraftUtils.resetBlockWithType(n,"unstyled"));i.stateAfter.getCurrentContent().hasText()?setTimeout((function(){i&&e.split.fn(i.stateBefore,i.stateAfter,i.shouldMoveCommentFn),setTimeout((function(){e.addSibling.fn({type:e.blockDef.name})}),20)}),50):(this.widget.setState(i.stateBefore),setTimeout((function(){e.addSibling.fn({type:e.blockDef.name})}),20))},t}(),S=function(){function t(t,e){this.icon="#icon-cut",this.type="split",this.widget=t,this.split=e,this.description=(0,l.gettext)("Split block")}return t.prototype.onSelect=function(t){var e=this,n=t.editorState,i=window.draftail.splitState(window.draftail.DraftUtils.resetBlockWithType(n,"unstyled"));setTimeout((function(){i&&e.split.fn(i.stateBefore,i.stateAfter,i.shouldMoveCommentFn)}),50)},t}(),_=function(){function t(t,e,n){this.input=t,this.capabilities=new Map(n),this.options=e;var i=a(draftail.initEditor("#"+this.input.id,this.getFullOptions(),document.currentScript),2)[1];this.setDraftailOptions=i}return t.prototype.getValue=function(){return this.input.value},t.prototype.getState=function(){return this.input.draftailEditor.getEditorState()},t.prototype.setState=function(t){this.input.draftailEditor.onChange(t)},t.prototype.getTextLabel=function(t){var e,n,i=t&&t.maxLength;if(!this.input.value)return"";var r=JSON.parse(this.input.value);if(!r||!r.blocks)return"";var o="";try{for(var a=s(r.blocks),u=a.next();!u.done;u=a.next()){var l=u.value;if(l.text&&(o+=o?" "+l.text:l.text,i&&o.length>i))return o.substring(0,i-1)+"…"}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.focus=function(){var t=this;setTimeout((function(){t.input.draftailEditor.focus()}),50)},t.prototype.setCapabilityOptions=function(t,e){var n=Object.assign(this.capabilities.get(t),e);this.capabilities.set(t,n),this.setDraftailOptions(this.getFullOptions())},t.prototype.getCapabilityOptions=function(t){var e=this,n={},i=t,r=i.get("split"),o=i.get("addSibling"),s=[];return r&&(s=(o&&o.enabled&&r.enabled?o.blockGroups:[]).map((function(t){var n=a(t,2),i=n[0],s=n[1].map((function(t){return new m(e,t,o,r)}));return{label:i||(0,l.gettext)("Blocks"),type:"streamfield-".concat(i),items:s}})),r.enabled&&s.push({label:"Actions",type:"custom-actions",items:[new S(this,r)]})),n.commands=u([{label:(0,l.gettext)("Rich text"),type:"blockTypes"},{type:"entityTypes"}],a(s),!1),n},t.prototype.getFullOptions=function(){return o(o({},this.options),this.getCapabilityOptions(this.capabilities))},t}(),O=function(){function t(t){this.options=t}return t.prototype.render=function(t,e,n,i,r){var o=document.createElement("input");o.type="hidden",o.id=n,o.name=e;var a=!!i.getCurrentContent;o.value=a?"null":i,t.appendChild(o);var s=new _(o,this.options,r);return a&&s.setState(i),s},t}();window.telepath.register("wagtail.widgets.DraftailRichTextArea",O);var x=function(t){function e(t){return this.options=t,this}return r(e,t),e.prototype.render=function(t,e,n,i){var r=document.createElement("input");r.type="text",r.name=e,r.id=n,t.replaceWith(r),this.initChooserFn(n,this.options);var o={getValue:function(){return r.value},getState:function(){return r.value},setState:function(t){r.value=t},focus:function(t){t&&t.soft||r.focus()},idForLabel:n};return o.setState(i),o},e}(c),C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.initChooserFn=window.initDateChooser,e}return r(e,t),e}(x);window.telepath.register("wagtail.widgets.AdminDateInput",C);var k=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.initChooserFn=window.initTimeChooser,e}return r(e,t),e}(x);window.telepath.register("wagtail.widgets.AdminTimeInput",k);var T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.initChooserFn=window.initDateTimeChooser,e}return r(e,t),e}(x);window.telepath.register("wagtail.widgets.AdminDateTimeInput",T);window.telepath.register("wagtail.errors.ValidationError",(function(t){this.messages=t}))}},n={};function i(t){var r=n[t];if(void 0!==r)return r.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,i),o.exports}i.m=e,t=[],i.O=(e,n,r,o)=>{if(!n){var a=1/0;for(p=0;p<t.length;p++){for(var[n,r,o]=t[p],s=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(i.O).every((t=>i.O[t](n[u])))?n.splice(u--,1):(s=!1,o<a&&(a=o));if(s){t.splice(p--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[n,r,o]},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.j=47,(()=>{var t={47:0};i.O.j=e=>0===t[e];var e=(e,n)=>{var r,o,[a,s,u]=n,l=0;if(a.some((e=>0!==t[e]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(u)var p=u(i)}for(e&&e(n);l<a.length;l++)o=a[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(p)},n=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=i.O(void 0,[751],(()=>i(4870)));r=i.O(r)})();