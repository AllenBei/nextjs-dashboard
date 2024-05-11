exports.id=678,exports.ids=[678],exports.modules={17960:(e,t,r)=>{Promise.resolve().then(r.bind(r,43994)),Promise.resolve().then(r.t.bind(r,29576,23))},50432:()=>{},43486:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,71908,23)),Promise.resolve().then(r.t.bind(r,64952,23)),Promise.resolve().then(r.t.bind(r,20551,23)),Promise.resolve().then(r.t.bind(r,41564,23)),Promise.resolve().then(r.t.bind(r,45261,23)),Promise.resolve().then(r.t.bind(r,48937,23))},43994:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var s=r(12150),a=r(1046),o=r(83296),i=r(52927),n=r(395),c=r(96339),l=r(88164);let d=[{name:"Home",href:"/dashboard",icon:a.Z},{name:"Invoices",href:"/dashboard/invoices",icon:o.Z},{name:"Customers",href:"/dashboard/customers",icon:i.Z}];function m(){let e=(0,c.usePathname)();return s.jsx(s.Fragment,{children:d.map(t=>{let r=t.icon;return(0,s.jsxs)(n.default,{href:t.href,className:(0,l.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[s.jsx(r,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},54574:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(31925),a=r(54528);function o({children:e}){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[s.jsx("div",{className:"w-full flex-none md:w-64",children:s.jsx(a.default,{})}),s.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}},61401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var s=r(31925);r(50102);let a={title:{template:"%s | Acme Dashboard",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function o({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:e})})}},15685:(e,t,r)=>{"use strict";r.d(t,{BX:()=>u,D1:()=>m,NI:()=>n,V_:()=>d,qu:()=>c,t2:()=>i,x4:()=>l});var s=r(42737),a=r(8008),o=r(31089);async function i(){try{console.log("Fetching revenue data...");let e=await (0,s.i6)`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function n(){try{return(await (0,s.i6)`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).rows.map(e=>({...e,amount:(0,a.xG)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function c(){try{let e=(0,s.i6)`SELECT COUNT(*) FROM invoices`,t=(0,s.i6)`SELECT COUNT(*) FROM customers`,r=(0,s.i6)`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,o=await Promise.all([e,t,r]),i=Number(o[0].rows[0].count??"0"),n=Number(o[1].rows[0].count??"0"),c=(0,a.xG)(o[2].rows[0].paid??"0"),l=(0,a.xG)(o[2].rows[0].pending??"0");return{numberOfCustomers:n,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function l(e,t){try{return(await (0,s.i6)`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function d(e){try{let t=await (0,s.i6)`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t.rows[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function m(e){(0,o.unstable_noStore)();try{let t=(await (0,s.i6)`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).rows.map(e=>({...e,amount:e.amount/100}));return console.log(t),t[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function u(){try{return(await (0,s.i6)`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},8008:(e,t,r)=>{"use strict";r.d(t,{p9:()=>a,tk:()=>o,xG:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),a=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},o=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},8706:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(31925),a=r(5128),o=r(79925),i=r.n(o);function n(){return(0,s.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(a.Z,{className:"h-12 w-12 rotate-[15deg]"}),s.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},54528:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>v,default:()=>f});var s=r(31925),a=r(3966);r(10427);var o=r(79704),i=r(86255);let n=(0,i.createProxy)(String.raw`/Users/allenbei/private/project/nextjs-dashboard/app/ui/dashboard/nav-links.tsx`),{__esModule:c,$$typeof:l}=n;n.default;let d=(0,i.createProxy)(String.raw`/Users/allenbei/private/project/nextjs-dashboard/app/ui/dashboard/nav-links.tsx#default`);var m=r(8706),u=r(58028),h=r(70594);function f(){return(0,s.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[s.jsx(o.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:s.jsx("div",{className:"w-32 text-white md:w-40",children:s.jsx(m.Z,{})})}),(0,s.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[s.jsx(d,{}),s.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),s.jsx("form",{action:(0,a.j)("5d574c5566f53bb3fdf13247ac7cd19a7b2f8ea8",v),children:(0,s.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[s.jsx(u.Z,{className:"w-6"}),s.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}async function v(){await (0,h.w7)()}},70594:(e,t,r)=>{"use strict";r.d(t,{zB:()=>m,w7:()=>u});var s=r(51582),a=r(21275),o=r(99805),i=r(42737),n=r(67096),c=r.n(n);async function l(e){try{return(await (0,i.i6)`SELECT * FROM users WHERE email=${e}`).rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:m,signOut:u}=(0,s.ZP)({pages:{signIn:"/login"},callbacks:{authorized({auth:e,request:{nextUrl:t}}){let r=!!e?.user;return t.pathname.startsWith("/dashboard")?!!r:!r||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,a.Z)({async authorize(e){console.log("credentials is",e);let t=o.z.object({email:o.z.string().email(),password:o.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,s=await l(e);return s?await c().compare(r,s.password)?s:(console.log("Invalid credentials"),null):null}}})]})},31657:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(22228);let a=e=>[{type:"image/x-icon",sizes:"48x48",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},83320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(22228);let a=e=>[{type:"image/png",width:1686,height:882,url:(0,s.fillMetadataSegment)(".",e.params,"opengraph-image.png")+"?886e7c13529660db"}]},50102:()=>{}};