import LikeButton from './button.js';
import Table from './table.js';

const e = React.createElement;
const { Td, Thead } = Table();

const root = ReactDOM.createRoot(document.getElementById('like_button_container'));


const tableheads = ['Sl', 'Name', 'Email', 'Action'];

const heads = <Thead tableheads={tableheads} />;

root.render(heads);