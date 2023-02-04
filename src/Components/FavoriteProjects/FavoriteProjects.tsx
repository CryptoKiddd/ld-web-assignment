import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useAxios } from "../..//CustomHooks/useAxios";
import { setFavoriteProjects } from "../../redux/features/favoriteProjectsSlice";
import { IProject } from "../../Types/types";

const FavoriteProjects = () => {
  const [loading, data, error] = useAxios<IProject[]>({
    method: "GET",
    url: " http://localhost:3500/projects",
  });
  const dispatch = useDispatch();
  const favoriteProjects = useSelector(
    (state: RootState) => state.favotireProjects.projects
  );
  dispatch(setFavoriteProjects(data));



  return <div>

  </div>;
};

export default FavoriteProjects;
