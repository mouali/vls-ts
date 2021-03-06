package fr.minint.sief.domain;

import java.io.Serializable;
import java.util.Objects;

import javax.validation.constraints.NotNull;

import org.joda.time.DateTime;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import fr.minint.sief.domain.enumeration.DocumentType;
import fr.minint.sief.domain.util.CustomDateTimeDeserializer;
import fr.minint.sief.domain.util.CustomDateTimeSerializer;

/**
 * A Document.
 */
public class Document implements Serializable {
    @NotNull
    @Field("type")
    private DocumentType type;
    
    @NotNull
    @Field("id")
    private String id;
    
    @NotNull
    @Field("name")
    private String name;
    
    @NotNull
    @Field("file_name")
    private String fileName;

    @JsonSerialize(using = CustomDateTimeSerializer.class)
    @JsonDeserialize(using = CustomDateTimeDeserializer.class)
    @Field("validation")
    private DateTime validation;

    public DocumentType getType() {
		return type;
	}

	public void setType(DocumentType type) {
		this.type = type;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public DateTime getValidation() {
		return validation;
	}

	public void setValidation(DateTime validation) {
		this.validation = validation;
	}

	@Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Document document = (Document) o;

        if ( ! Objects.equals(type, document.type)
    			|| ! Objects.equals(id, document.id)
    			|| ! Objects.equals(name, document.name)
    			|| ! Objects.equals(fileName, document.fileName)) return false;

        return true;
    }

    @Override
    public int hashCode() {
    	final int prime = 31;
    	int result = 1;
    	result = prime * result + Objects.hashCode(type);
    	result = prime * result + Objects.hashCode(id);
    	result = prime * result + Objects.hashCode(name);
    	result = prime * result + Objects.hashCode(fileName);
    	return result;
    }

    @Override
    public String toString() {
        return "Document{" +
                "type='" + type + "'" +
                ", id='" + id + "'" +
                ", name='" + name + "'" +
                ", fileName='" + fileName + "'" +
                ", validation='" + validation + "'" +
                '}';
    }
}
