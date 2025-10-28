


// ✅ Import your public pages


export const PublicRoute = ({ component: Component, layout: Layout }
 ) => {
  if(!Layout && !Component) {
    return <div>Notfound</div>}
  return (
   <Layout> 
    <Component />
   </Layout>
  );
};

 
