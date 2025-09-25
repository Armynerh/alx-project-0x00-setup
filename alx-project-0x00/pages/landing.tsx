import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button size="medium" shape="rounded-sm" title="Click Me" style="" />
      <Button size="medium" shape="rounded-lg" title="Click Me" style="" />
      <Button size="medium" shape="rounded-full" title="Click Me" style="" />
    </div>
  )
}
export default Landing