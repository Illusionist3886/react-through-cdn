export default function Table() {
  function Thead(props) {
    let heads = props.tableheads;
    let html = '';
    for (const head in heads) {
      html += `<td class="border px-2 py-1">${heads[head]}</td>`;
    }
console.log(html)
    return <>
    <thead dangerouslySetInnerHTML={{ __html: html }}></thead>
    </>;
  }

  function Td(props) {
    return <td className="p-2 border">TD</td>;
  }

  return {
    Thead,
    Td,
  };
}
