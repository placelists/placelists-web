import { Block } from "@/components/ui/block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { Path } from "@/settings";
import { getPlacelistsByQuery } from "@/store/api-actions/placelist-actions";
import { useNavigate } from "react-router";

function DiscoverPage() {
  const dispatch = useAppDispatch();
  const placelists = useAppSelector((state) => state.placelist.placelists);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight">Find placelists</h1>

      <Card>
        <CardContent className="pt-6">
          <Input
            placeholder="Search"
            type="text"
            onInput={(event) => dispatch(getPlacelistsByQuery(event.currentTarget.value))}
          />
        </CardContent>
      </Card>

      <Block>
        {placelists.map((placelist) => (
          <Card
            key={placelist.id}
            className="cursor-pointer hover:bg-secondary/90"
            onClick={() => navigate(`${Path.Placelists}/${placelist.id}`)}
          >
            <CardHeader>
              <CardTitle>{placelist.name}</CardTitle>
              <CardDescription>{placelist.authorUsername ?? "Author not found"}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Block>
    </>
  );
}

export default DiscoverPage;
