import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss'
const categories = [
    {
      "id": 1,
      "title": "nikes",
      "imageUrl": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      route: `shop/nikes`
    },
    {
      "id": 2,
      "title": "adidas",
      "imageUrl": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      route: `shop/adidas`
    },
    {
      "id": 3,
      "title": "new balances",
      "imageUrl": "https://images.unsplash.com/photo-1613380657175-407fc07c69c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG5ldyUyMGJhbGFuY2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      route: `shop/new%20balances`
    },
    {
      "id": 4,
      "title": "converse",
      "imageUrl": "https://images.unsplash.com/photo-1572601809155-8a9f3191b2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29udmVyc2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      route: `shop/converse`
    },
    {
      "id": 5,
      "title": "vans",
      "imageUrl": "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFucyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      route: `shop/vans`
    },
    {
      "id": 6,
      "title": "jordan",
      "imageUrl": "https://images.unsplash.com/photo-1609535766154-e47e5aa87789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8am9yZGFuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      route: `shop/jordan`
    }
  ];     

const Directory = () => {
    return (
        <div className="directory-container">
            { categories.map(p => <DirectoryItem key={p.id} p={p}/>)}
        </div>
    )
}
export default Directory;