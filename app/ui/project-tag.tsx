export default function ProjectTag({ text }: { text: string }) {
    return (
        <div className="ml-0.5 mr-0.5 mb-1">
            <p className="text-xs bg-tertiary w-fit rounded-xl pl-2 pr-2 pt-0.5 pb-0.5">{ text }</p>
        </div>
    );
}
