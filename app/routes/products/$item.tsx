import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

export let loader: LoaderFunction = ({ params }) => {
    return {
        itemId: params.item,
    };
};

export default function Index() {
    const { itemId } = useLoaderData();

    return <div>Item Page {JSON.stringify(itemId)}</div>;
}
