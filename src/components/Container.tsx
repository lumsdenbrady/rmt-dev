type containerPropTypes = {
  children: React.ReactNode
}
export default function Container({children}: containerPropTypes) {
  return <div className="container">
{children}
    
  </div>;
}
