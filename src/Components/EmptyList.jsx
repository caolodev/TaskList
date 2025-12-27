import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const EmptyList = () => {
  return (
    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <FontAwesomeIcon
          icon={faCalendar}
          className="lucide lucide-calendar h-8 w-8 text-gray-300 text-4xl"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        Sua Lista está vazia
      </h3>
      <p className="text-muted-foreground">Adicione uma tarefa para começar</p>
    </div>
  );
};

export default EmptyList;
