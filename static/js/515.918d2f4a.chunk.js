"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[515],{9515:function(t,s,e){e.r(s),e.d(s,{default:function(){return D},withRouter:function(){return M}});var n=e(5671),a=e(3144),u=e(136),r=e(4104),i=e(8683),o=e(2791),c={},p=e(6159),l=e(9439),d=e(184),f=function(t){var s=(0,o.useState)(!1),e=(0,l.Z)(s,2),n=e[0],a=e[1],u=(0,o.useState)(t.status),r=(0,l.Z)(u,2),i=r[0],c=r[1];(0,o.useEffect)((function(){c(t.status)}),[t.status]);var p=function(){a(!n),n&&t.updateStatus(i)};return(0,d.jsx)("div",{children:n?(0,d.jsxs)("div",{children:[(0,d.jsx)("input",{type:"text",value:i,autoFocus:!0,onChange:function(t){c(t.currentTarget.value)}}),(0,d.jsx)("button",{onClick:p,children:"Save"})]}):(0,d.jsx)("div",{children:(0,d.jsx)("span",{onClick:p,children:t.status})})})},h=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return s?(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:s.photos.large,alt:""}),(0,d.jsx)(f,{status:e,updateStatus:n})]}):(0,d.jsx)(p.p,{})},x={posts:"MyPosts_posts__GSiZ2",textareaBox:"MyPosts_textareaBox__xgjlg",textarea:"MyPosts_textarea__TKsaX",button:"MyPosts_button__TKXtI"},v="Post_itemInner__uKAr-",j="Post_item__Yu4oG";function m(t){return(0,d.jsxs)("div",{className:j,children:[(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("img",{src:"https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-panda-v-ochkah.jpg",alt:""}),t.message]}),t.likesCount," likes"]})}var g=e(6139),_=e(704),S=e(4193),k=e(3485),P=(0,o.memo)((function(t){var s=t.posts,e=t.addPost,n=s.map((function(t){return(0,d.jsx)(m,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:x.postsHeader,children:[(0,d.jsx)("h5",{children:"MyPosts"}),(0,d.jsx)(Z,{onSubmit:function(t){e(t.newPostText)}})]}),(0,d.jsx)("div",{className:x.posts,children:n})]})})),Z=(0,_.Z)({form:"newPost"})((function(t){return(0,d.jsxs)("form",{className:x.textareaBox,onSubmit:t.handleSubmit,children:[(0,d.jsx)(g.Z,{className:x.textarea,name:"newPostText",component:k.g,placeholder:"Tell something",validate:[S.C1,S.cE]}),(0,d.jsx)("button",{className:x.button,children:"add"})]})})),y=e(6407),C=e(364);console.log("render");var b=(0,C.$j)((function(t){return{posts:t.profilePage.postsData}}),(function(t){return{addPost:function(s){t((0,y.Wl)(s))}}}))(P),w=function(t){var s=t.profile,e=t.status,n=t.updateStatus;return(0,d.jsxs)("div",{className:c.content,children:[(0,d.jsx)(h,{profile:s,status:e,updateStatus:n}),(0,d.jsx)(b,{})]})},N=e(7689),A=e(2932),I=e(7781);function M(t){return function(s){var e=(0,N.s0)(),n={params:(0,N.UO)()};return(0,d.jsx)(t,(0,i.Z)((0,i.Z)({},s),{},{match:n,navigate:e}))}}var T=function(t){(0,u.Z)(e,t);var s=(0,r.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,a.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;!t&&this.props.userId?t=this.props.userId.toString():this.props.navigate("/login"),this.props.getUser(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)(w,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),e}(o.Component),D=(0,I.qC)((0,C.$j)((function(t){return{profile:t.profilePage.profile,isAuth:t.auth.isAuth,status:t.profilePage.status,userId:t.auth.id}}),(function(t){return{getUser:function(s){t((0,y.Y_)(s))},updateStatus:function(s){t((0,y.Nf)(s))},getStatus:function(s){t((0,y.jQ)(s))}}})),M,A.D)(T)},2932:function(t,s,e){e.d(s,{D:function(){return p}});var n=e(8683),a=e(5987),u=(e(2791),e(364)),r=e(7689),i=e(184),o=["isAuth"],c=function(t){return{isAuth:t.auth.isAuth}},p=function(t){return(0,u.$j)(c)((function(s){s.isAuth;var e=(0,a.Z)(s,o);return s.isAuth?(0,i.jsx)(t,(0,n.Z)({},e)):(0,i.jsx)(r.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=515.918d2f4a.chunk.js.map