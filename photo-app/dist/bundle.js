!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;t.Item=class{constructor(e,t){this.id=e,this.title=t}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=r(2),n=r(3),o=r(4),u=r(5),s=new i.User(1,"arielskap","ari",!0),c=new n.Album(10,"Platzi Pictures"),a=new o.Picture(1,"Typescript Course","2020-03",u.PhotoOrientation.Landscape);s.addAlbum(c),c.addPicture(a),console.log("user",s),s.removeAlbum(c),console.log("user",s)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0;t.User=class{constructor(e,t,r,i){this.id=e,this.username=t,this.firstName=r,this.isPro=i,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex(t=>t.id===e.id);let r;return t>=0&&(r=this.album[t],this.album.splice(t,1)),r}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const i=r(0);class n extends i.Item{constructor(e,t){super(e,t),this.pictures=[]}addPicture(e){this.pictures.push(e)}}t.Album=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const i=r(0);class n extends i.Item{constructor(e,t,r,i){super(e,t),this._date=r,this._orientation=i}toString(){return`[id: ${this.id},\n            title: ${this.title},\n            orientation: ${this._orientation}]`}}t.Picture=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,function(e){e[e.Landscape=0]="Landscape",e[e.Portrait=1]="Portrait",e[e.Square=2]="Square",e[e.Panorama=3]="Panorama"}(t.PhotoOrientation||(t.PhotoOrientation={}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsYnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9waG90by1vcmllbnRhdGlvbi50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkl0ZW0iLCJpZCIsInRpdGxlIiwidGhpcyIsInVzZXJfMSIsImFsYnVtXzEiLCJwaWN0dXJlXzEiLCJwaG90b19vcmllbnRhdGlvbl8xIiwidXNlciIsIlVzZXIiLCJhbGJ1bSIsIkFsYnVtIiwicGljdHVyZSIsIlBpY3R1cmUiLCJQaG90b09yaWVudGF0aW9uIiwiTGFuZHNjYXBlIiwiYWRkQWxidW0iLCJhZGRQaWN0dXJlIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUFsYnVtIiwidXNlcm5hbWUiLCJmaXJzdE5hbWUiLCJpc1BybyIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsImEiLCJkZWxldGVkQWxidW0iLCJzcGxpY2UiLCJpdGVtXzEiLCJzdXBlciIsInBpY3R1cmVzIiwiX2RhdGUi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TyxJQUN0RG5CLEVBQVFnRCxzQkFBbUIsRUFFM0IsU0FBV0EsR0FDUEEsRUFBaUJBLEVBQTRCLFVBQUksR0FBSyxZQUN0REEsRUFBaUJBLEVBQTJCLFNBQUksR0FBSyxXQUNyREEsRUFBaUJBLEVBQXlCLE9BQUksR0FBSyxTQUNuREEsRUFBaUJBLEVBQTJCLFNBQUksR0FBSyxXQUp6RCxDQUtzQmhELEVBQVFnRCxtQkFBcUJoRCxFQUFRZ0QsaUJBQW1CIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuSXRlbSA9IHZvaWQgMDtcclxuY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuSXRlbSA9IEl0ZW07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHVzZXJfMSA9IHJlcXVpcmUoXCIuL3VzZXJcIik7XHJcbmNvbnN0IGFsYnVtXzEgPSByZXF1aXJlKFwiLi9hbGJ1bVwiKTtcclxuY29uc3QgcGljdHVyZV8xID0gcmVxdWlyZShcIi4vcGljdHVyZVwiKTtcclxuY29uc3QgcGhvdG9fb3JpZW50YXRpb25fMSA9IHJlcXVpcmUoXCIuL3Bob3RvLW9yaWVudGF0aW9uXCIpO1xyXG5jb25zdCB1c2VyID0gbmV3IHVzZXJfMS5Vc2VyKDEsICdhcmllbHNrYXAnLCAnYXJpJywgdHJ1ZSk7XHJcbmNvbnN0IGFsYnVtID0gbmV3IGFsYnVtXzEuQWxidW0oMTAsICdQbGF0emkgUGljdHVyZXMnKTtcclxuY29uc3QgcGljdHVyZSA9IG5ldyBwaWN0dXJlXzEuUGljdHVyZSgxLCAnVHlwZXNjcmlwdCBDb3Vyc2UnLCAnMjAyMC0wMycsIHBob3RvX29yaWVudGF0aW9uXzEuUGhvdG9PcmllbnRhdGlvbi5MYW5kc2NhcGUpO1xyXG4vLyBDcmVhbW9zIHJlbGFjaW9uZXNcclxudXNlci5hZGRBbGJ1bShhbGJ1bSk7XHJcbmFsYnVtLmFkZFBpY3R1cmUocGljdHVyZSk7XHJcbmNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbi8vIEJvcnJhbW8gQWxidW1cclxudXNlci5yZW1vdmVBbGJ1bShhbGJ1bSk7XHJcbmNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcclxuY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcm5hbWUsIGZpcnN0TmFtZSwgaXNQcm8pIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMuaXNQcm8gPSBpc1BybztcclxuICAgICAgICB0aGlzLmFsYnVtID0gW107XHJcbiAgICB9XHJcbiAgICBhZGRBbGJ1bShhbGJ1bSkge1xyXG4gICAgICAgIHRoaXMuYWxidW0ucHVzaChhbGJ1bSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBbGJ1bShhbGJ1bSkge1xyXG4gICAgICAgIC8vQnVzY2FyIEFsYnVtXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFsYnVtLmZpbmRJbmRleChhID0+IGEuaWQgPT09IGFsYnVtLmlkKTtcclxuICAgICAgICBsZXQgZGVsZXRlZEFsYnVtO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZWRBbGJ1bSA9IHRoaXMuYWxidW1baW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFsYnVtLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWxldGVkQWxidW07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BbGJ1bSA9IHZvaWQgMDtcclxuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcclxuY2xhc3MgQWxidW0gZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcclxuICAgICAgICBzdXBlcihpZCwgdGl0bGUpO1xyXG4gICAgICAgIHRoaXMucGljdHVyZXMgPSBbXTtcclxuICAgIH1cclxuICAgIGFkZFBpY3R1cmUocGljdHVyZSkge1xyXG4gICAgICAgIHRoaXMucGljdHVyZXMucHVzaChwaWN0dXJlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFsYnVtID0gQWxidW07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUGljdHVyZSA9IHZvaWQgMDtcclxuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcclxuY2xhc3MgUGljdHVyZSBleHRlbmRzIGl0ZW1fMS5JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgX2RhdGUsIF9vcmllbnRhdGlvbikge1xyXG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XHJcbiAgICAgICAgdGhpcy5fZGF0ZSA9IF9kYXRlO1xyXG4gICAgICAgIHRoaXMuX29yaWVudGF0aW9uID0gX29yaWVudGF0aW9uO1xyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBbaWQ6ICR7dGhpcy5pZH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiAke3RoaXMudGl0bGV9LFxyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJHt0aGlzLl9vcmllbnRhdGlvbn1dYDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBpY3R1cmUgPSBQaWN0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB2b2lkIDA7XHJcbnZhciBQaG90b09yaWVudGF0aW9uO1xyXG4oZnVuY3Rpb24gKFBob3RvT3JpZW50YXRpb24pIHtcclxuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcclxuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlBvcnRyYWl0XCJdID0gMV0gPSBcIlBvcnRyYWl0XCI7XHJcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJTcXVhcmVcIl0gPSAyXSA9IFwiU3F1YXJlXCI7XHJcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiO1xyXG59KShQaG90b09yaWVudGF0aW9uID0gZXhwb3J0cy5QaG90b09yaWVudGF0aW9uIHx8IChleHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB7fSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9